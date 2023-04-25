"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[46027],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=n.createContext({}),m=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):r(r({},t),e)),o},s=function(e){var t=m(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=m(o),h=a,u=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return o?n.createElement(u,r(r({ref:t},s),{},{components:o})):n.createElement(u,r({ref:t},s))}));function h(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=o.length,r=new Array(i);r[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var m=2;m<i;m++)r[m]=o[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}p.displayName="MDXCreateElement"},36208:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var n=o(87462),a=(o(67294),o(3905));const i={title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",slug:"docker-copy",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/social.png",hide_table_of_contents:!1},r=void 0,l={permalink:"/blog/docker-copy",source:"@site/blog/2022-12-28-docker-copy.md",title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",date:"2022-12-28T00:00:00.000Z",formattedDate:"December 28, 2022",tags:[{label:"docker",permalink:"/blog/tags/docker"},{label:"dev-tools",permalink:"/blog/tags/dev-tools"}],readingTime:7.155,hasTruncateMarker:!1,authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],frontMatter:{title:"How to Use Docker Copy Command",description:"We'll discuss how to copy files in Docker using the docker copy command.",slug:"docker-copy",authors:"muhammad_khabbab",tags:["docker","dev-tools"],image:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/social.png",hide_table_of_contents:!1},prevItem:{title:"How to Fetch Data in React with useSWR",permalink:"/blog/data-fetching-next-js-useswr"},nextItem:{title:"Dynamic Forms with React Hook Form",permalink:"/blog/dynamic-forms-in-react-hook-form"},relatedPosts:[{title:"Framer Motion examples for React animations",permalink:"/blog/framer-motion-react-animations",formattedDate:"September 1, 2022",authors:[{name:"Joel Ezimorah",title:"Software Developer",url:"https://github.com/prince-joel",imageURL:"https://github.com/prince-joel.png",key:"joel_ezimorah"}],readingTime:8.64,date:"2022-09-01T00:00:00.000Z"},{title:"How to Delete Local and Remote Git Branches",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"November 27, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.75,date:"2022-11-27T00:00:00.000Z"},{title:"How to Use Docker EntryPoint",permalink:"/blog/docker-entrypoint",formattedDate:"January 10, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.145,date:"2023-01-10T00:00:00.000Z"}],authorPosts:[{title:"How to Use Docker EntryPoint",permalink:"/blog/docker-entrypoint",formattedDate:"January 10, 2023",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.145,date:"2023-01-10T00:00:00.000Z"},{title:"How to Delete Local and Remote Git Branches",permalink:"/blog/git-delete-remote-branch-and-local-branch",formattedDate:"November 27, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.75,date:"2022-11-27T00:00:00.000Z"},{title:"How to use Docker Build Args and Environment Variables",permalink:"/blog/docker-build-args-and-env-vars",formattedDate:"September 28, 2022",authors:[{name:"Muhammad Khabbab",title:"Project Manager",imageURL:"/img/generic-profile.png",key:"muhammad_khabbab"}],readingTime:7.555,date:"2022-09-28T00:00:00.000Z"}]},c={authorsImageUrls:[void 0]},m=[{value:"Introduction",id:"introduction",level:2},{value:"How to copy files in Docker",id:"how-to-copy-files-in-docker",level:2},{value:"How docker copy command works",id:"how-docker-copy-command-works",level:2},{value:"Difference between Copy and Add command",id:"difference-between-copy-and-add-command",level:2},{value:"Limitations of Copy command",id:"limitations-of-copy-command",level:2},{value:"When should you use Docker copy",id:"when-should-you-use-docker-copy",level:2}],s=(d="PromotionBanner",function(e){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",e)});var d;const p={toc:m};function h(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"We will discuss how to copy files in Docker using the docker copy command. The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker cp")," command is a powerful command through which you can move files between your host file system and your Docker containers. It works with both files and directories."),(0,a.kt)("p",null,"Steps we'll cover:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-to-copy-files-in-docker"},"How to copy files in Docker")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#how-docker-copy-command-works"},"How docker copy command works")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#difference-between-copy-and-add-command"},"Difference between Copy and Add command")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#limitations-of-copy-command"},"Limitations of Copy command")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#when-should-you-use-docker-copy"},"When should you use Docker copy"))),(0,a.kt)("h2",{id:"how-to-copy-files-in-docker"},"How to copy files in Docker"),(0,a.kt)("p",null,"Copying important files and directories is an essential part of container building. There are three ways to copy files in Docker:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"docker CP")," command"),(0,a.kt)("li",{parentName:"ul"},"Dockerfile ",(0,a.kt)("inlineCode",{parentName:"li"},"COPY")," command"),(0,a.kt)("li",{parentName:"ul"},"Using volume mounts")),(0,a.kt)("p",null,"Today we will discuss the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker cp")," command in detail. We will also touch upon the ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," command in Dockerfile. Let\u2019s start with the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker cp")," command first. ",(0,a.kt)("inlineCode",{parentName:"p"},"docker cp")," is a powerful command through which you can move files between your host file system and your Docker containers. It works with both files and directories.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," command is the quickest way to copy files to and from docker container. The ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," command is very similar to the unix \u201ccp\u201d command. The basic syntax of the command is as follows:\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker cp <src> <dest>")),(0,a.kt)("p",null,"If you are running from the windows prompt, then you need to mention the container name/ID as part of the source. Let\u2019s try one example. The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker ps")," command will display the running containers. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image1.png",alt:"docker copy command"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Note the ID of the running container you want the files to copied to. In above example the container ID is \u201c613a1a58b70d\u201d. If you have opened the terminal/CLI for a specific container, then no need to mention the container ID. "),(0,a.kt)("p",null,"Now let\u2019s find the files in the container through basic ",(0,a.kt)("inlineCode",{parentName:"p"},"ls")," command. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image2.png",alt:"docker copy command"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"The below command will copy the file ",(0,a.kt)("inlineCode",{parentName:"p"},"app.js")," from container to host file system in the folder ",(0,a.kt)("inlineCode",{parentName:"p"},"D:/DockerCopy"),". Note the container ID is mentioned in the source. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image3.png",alt:"docker copy command"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Instead of ID, you can mention container name as well. See the example below:"),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image4.png",alt:"docker copy command"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Just reverse the command and you can copy the file from host file system to the container. The below example will copy a text file named \u201ctocopy.txt\u201d from host file system to the container. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image5.png",alt:"docker copy command"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"To verify the successfully copy, run the ",(0,a.kt)("inlineCode",{parentName:"p"},"ls")," command in the container terminal. You can see the file copied to container. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image6.png",alt:"docker copy command"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"You can use the same command to copy not just single file but whole folder as well. "),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image7.png",alt:"docker copy command"})),(0,a.kt)("br",null),(0,a.kt)("div",{className:"centered-image"},(0,a.kt)("img",{style:{alignSelf:"center"},src:"https://refine.ams3.cdn.digitaloceanspaces.com/blog/2022-12-28-docker-copy/image8.png",alt:"docker copy command"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"Note that the docker ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," command assumes that container path is relative to the container's / (root) directory. Also, the ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," command will work regardless of container is running or stopped. "),(0,a.kt)("p",null,"There are only two optional arguments for this command:\n",(0,a.kt)("inlineCode",{parentName:"p"},"-a: Archive mode. It preserves all uid/gid information of the files to be copied"),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"-L: Always follow symbolic links in SRC")),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("inlineCode",{parentName:"p"},"docker cp")," command to copy files between two containers. Just use the container name or ID in the source and destination paths. "),(0,a.kt)("hr",null),(0,a.kt)(s,{title:"Building a side project?",image:"https://refine.ams3.cdn.digitaloceanspaces.com/website/static/img/diagram.png",mdxType:"PromotionBanner"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"##\xa0Copy through Dockerfile\nLet\u2019s discuss how to copy files through dockerfile copy command. The basic purpose of Dockerfile is to build Docker image, which is then converted into Docker containers. Dockerfiles can contain different commands, one of which is ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY"),". The ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," command allows us to copy a file or folder from the host system into the docker image. The copied files become a part of every container that is created from that docker image. "),(0,a.kt)("p",null,"The syntax is same as the cp command discussed above:\n",(0,a.kt)("inlineCode",{parentName:"p"},"COPY <source> <destination>"),"\nThe below example will copy index.html to the container to replace the default index.html file.\n",(0,a.kt)("inlineCode",{parentName:"p"},"\u2026\nCOPY index.html /var/www/html\n\u2026"),"\nIf you build the docker image and run the container, you will see the file will be copied. Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," command cannot be used copy files between your host and a running container. The sole purpose of ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," command is to add files in the docker image during the construction process. "),(0,a.kt)("h2",{id:"how-docker-copy-command-works"},"How docker copy command works"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"docker cp")," command is used to copy files to/from your docker container to the host file system. This command works even if the container is not running. As Docker uses layers for storing images, when you run the container, Docker creates another layer on top of the existing layer. The new layer contains all the changes done inside the container. Note that it is not a data volume like a file system or a directory that we can mount directly to a docker container. The data inside the container is managed by the storage driver. Data is present inside the block level of the parent image of the container, and this is where the ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," command is executed. Container is actually a snapshot of the image so it does not have the block, but it has a pointer to the block on the nearest parent image where it is actually residing. It reads the respective block from there and copies it upon execution of ",(0,a.kt)("inlineCode",{parentName:"p"},"docker cp")," command."),(0,a.kt)("h2",{id:"difference-between-copy-and-add-command"},"Difference between Copy and Add command"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD")," command has been there even before the ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," command. Although the ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," command essentially performs the same function i.e. copying files and folders to a docker container. However, there are a few additional features in the ",(0,a.kt)("inlineCode",{parentName:"p"},"Add")," command. "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can mention a URL as source. The command will download the files from the URL and will copy them to the destination.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ADD http://website.com/folder  /destination/folder"),"\nThe above command will download all files from the source folder and will copy them to the destination folder of the container. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You can mention a compressed file in the source, and it will decompress the contents and then copy them to the destination.\n",(0,a.kt)("inlineCode",{parentName:"p"},"ADD source.file.gzip /destination/folder"),"\nThe above example will extract the contents of a local zip file to the destination folder. Note that you cannot mention a URL of a compressed file as a source; the compressed file must be from the local file system. This technique will stop creating an additional image layer and will save space too."))),(0,a.kt)("p",null,"However, in spite of all the extra features provided by ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD")," command, Docker discourages its use because of safety reasons. Docker suggests using only the ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," command if copying a local file. If you want to download and copy files from the internet, then it suggests using the ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," command with a ",(0,a.kt)("inlineCode",{parentName:"p"},"RUN")," command.\nThe only recommended use of ",(0,a.kt)("inlineCode",{parentName:"p"},"ADD")," is to extract the local tar file into the image, as shown in below example:\n",(0,a.kt)("inlineCode",{parentName:"p"},"ADD rootfs.tar.xz /")),(0,a.kt)("h2",{id:"limitations-of-copy-command"},"Limitations of Copy command"),(0,a.kt)("p",null,"Despite of all he usefulness of Docker ",(0,a.kt)("inlineCode",{parentName:"p"},"cp")," command, it has certain limitations, as below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You cannot use it to copy files between two containers. You will need to multi-stage it by copying files from container 1 to a host file system and then copying from the host file system to container 2"),(0,a.kt)("li",{parentName:"ul"},"You cannot use it to download files from a URL and then copy them. Files must be present on the local file system"),(0,a.kt)("li",{parentName:"ul"},"You cannot copy certain system files such as resources under ",(0,a.kt)("inlineCode",{parentName:"li"},"/proc"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"/sys"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"/dev"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"tmpfs"),", etc. ")),(0,a.kt)("h2",{id:"when-should-you-use-docker-copy"},"When should you use Docker copy"),(0,a.kt)("p",null,"Following are some of the common use cases for the docker copy command. "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can copy any important file from inside a docker container to the host file system, which will allow you to create a custom docker image the way you want it. E.g. you can run the official Nginx docker image and then use the ",(0,a.kt)("inlineCode",{parentName:"p"},"COPY")," command to copy the Nginx configuration file to the host file system")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"docker cp")," is very useful when debugging containers or when working in a non-production environment. If you have to manually inject a temporary configuration file or extract a buried log, it can be  extremely helpful. Using ",(0,a.kt)("inlineCode",{parentName:"p"},"docker cp")," is more convenient and faster than rebuilding the entire image every time you update the code."))))}h.isMDXComponent=!0}}]);