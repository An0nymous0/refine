/// <reference types="cypress" />
/// <reference types="../../cypress/support" />

describe("form-chakra-ui-use-form", () => {
    const BASE_URL = "http://localhost:3000";

    const mockPost = {
        title: `Lorem Ipsum is simply dummy text of the printing and typesetting industry`,
        content: `Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
        status: "draft",
    };

    const fillForm = () => {
        cy.get("#title").clear().type(mockPost.title);
        cy.get("#status").select(mockPost.status);
        cy.get("#categoryId").select(2);
    };

    const assertSuccessResponse = (response: any) => {
        const body = response?.body;

        expect(response?.statusCode).to.eq(200);
        expect(body).to.have.property("id");
        expect(body).to.have.property("category");
        expect(body?.title).to.eq(mockPost.title);
        expect(body?.status?.toLowerCase()).to.eq(
            mockPost?.status?.toLowerCase(),
        );

        cy.getChakraUINotification().contains(/success/gi);
        cy.location().should((loc) => {
            expect(loc.pathname).to.eq("/posts");
        });
    };

    const submitForm = () => {
        return cy.getSaveButton().click();
    };

    beforeEach(() => {
        cy.interceptGETPost();
        cy.interceptPOSTPost();
        cy.interceptPATCHPost();
        cy.interceptDELETEPost();
        cy.interceptGETPosts();
        cy.interceptGETCategories();

        cy.clearAllCookies();
        cy.clearAllLocalStorage();
        cy.clearAllSessionStorage();

        cy.visit(BASE_URL);
    });

    it("should create record", () => {
        cy.getCreateButton().click();

        // wait loading state and render to be finished
        cy.getSaveButton().should("not.be.disabled");
        cy.getChakraUILoadingOverlay().should("not.exist");

        fillForm();
        submitForm();

        cy.wait("@postPost").then((interception) => {
            const response = interception?.response;
            assertSuccessResponse(response);
        });
    });

    it("should edit record", () => {
        cy.getEditButton().first().click();

        cy.wait("@getPost").then((interception) => {
            const getResponse = interception?.response;
            const body = getResponse?.body;

            // wait loading state and render to be finished
            cy.getSaveButton().should("not.be.disabled");
            cy.getChakraUILoadingOverlay().should("not.exist");

            // assert response values are equal to the form values
            cy.get("#title").should("have.value", body?.title);
            cy.get("#status").should("have.value", body?.status);
            cy.get("#categoryId").should("have.value", body?.category?.id);

            fillForm();
            submitForm();

            cy.wait("@patchPost").then((patchInterception) => {
                const patchResponse = patchInterception?.response;
                assertSuccessResponse(patchResponse);
            });
        });
    });

    it("should delete record", () => {
        cy.getEditButton().first().click();

        cy.wait("@getPost");
        // wait loading state and render to be finished
        cy.getSaveButton().should("not.be.disabled");
        cy.getChakraUILoadingOverlay().should("not.exist");

        cy.getDeleteButton().click().getChakraUIPopoverDeleteButton().click();

        cy.wait("@deletePost").then((interception) => {
            const deleteResponse = interception?.response;
            expect(deleteResponse?.statusCode).to.eq(200);

            cy.getChakraUINotification().contains(/success/gi);
            cy.location().should((loc) => {
                expect(loc.pathname).to.eq("/posts");
            });
        });
    });

    it("should create form render errors", () => {
        cy.getCreateButton().click();

        submitForm();

        cy.getChakraUIFormItemError({ id: "title" }).contains(/required/gi);
        cy.getChakraUIFormItemError({ id: "status", type: "select" }).contains(
            /required/gi,
        );
        cy.getChakraUIFormItemError({
            id: "categoryId",
            type: "select",
        }).contains(/required/gi);
    });

    it("should edit form render errors", () => {
        cy.intercept("GET", "/posts/*").as("getPost");

        cy.getEditButton().first().click();

        cy.wait("@getPost");
        // wait loading state and render to be finished
        cy.getSaveButton().should("not.be.disabled");
        cy.getChakraUILoadingOverlay().should("not.exist");

        cy.get("#title").should("not.have.value", "").clear();
        cy.get("#status").select([]);
        cy.get("#categoryId").select([]);

        submitForm();

        cy.getChakraUIFormItemError({ id: "title" }).contains(/required/gi);
        cy.getChakraUIFormItemError({ id: "status", type: "select" }).contains(
            /required/gi,
        );
        cy.getChakraUIFormItemError({
            id: "categoryId",
            type: "select",
        }).contains(/required/gi);
    });

    it("should create form warn when unsaved changes", () => {
        cy.wait("@getPosts");
        cy.getCreateButton().click();
        cy.get("#title").type("any value");
        cy.getPageHeaderTitle().siblings().first().click();
        cy.on("window:confirm", (str) => {
            expect(str).to.includes("You have unsaved changes");
        });
    });

    it("should edit form warn when unsaved changes", () => {
        cy.wait("@getPosts");
        cy.getEditButton().first().click();

        // wait loading state and render to be finished
        cy.wait("@getPost");
        cy.getSaveButton().should("not.be.disabled");
        cy.getChakraUILoadingOverlay().should("not.exist");

        cy.get("#title").clear();
        cy.get("#title").type("any value");
        cy.getPageHeaderTitle().siblings().first().click();
        cy.on("window:confirm", (str) => {
            expect(str).to.includes("You have unsaved changes");
        });
    });
});
