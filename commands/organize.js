const fs = require("fs"); //fs module
const path = require("path"); //path module
let types = {
    media: ["mp4", "mkv", "mp3","mov"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex',"csv",'json'],
    app: ['exe', 'dmg', 'pkg', "deb","apk"],
    images: ['png','jpg','jpeg']
}

function organize(srcPath){
    // S1: to check if the source is present
    if(srcPath == undefined){
        //The process.cwd() method returns the current working directory of the Node.js process
        // console.log(srcPath);
        srcPath = process.cwd();
        // console.log(srcPath);
    }
    
    // S2. to create a directory by the name of organized files

    let organize_files = path.join(srcPath,"organized_files");
    // above and below line do the same thing.
    // let organize_files = srcPath + "/" + "organized_files"
    // console.log(organize_files);
    if(fs.existsSync(organize_files) == false){
        fs.mkdirSync(organize_files);
    }
    else{
        console.log("folder already exist");
    }   

    //S3. Scan the entire srcPath(downloads folder in this case) and put them in an array.

    //Reads the contents of the directory.-> basically read the names of files present in directory.
    let allFiles = fs.readdirSync(srcPath);
    // console.log(allFiles);


    // S4. Will traverse the array and classify files from it's extension(.pdf , .mp3)

    for(let i = 0 ; i < allFiles.length ; i++){
        // let ext = allFiles[i].split(".")[1];
        
        //1.   - Check if it is a file or folder
        
        let fullPathofFile = path.join(srcPath,allFiles[i]);  
        // console.log(fullPathofFile);
        // lstatSync gives the information regarding the link provided.
        let isThisFile = fs.lstatSync(fullPathofFile).isFile(); // true or false
        if(isThisFile){

            // 1.1 - get extension name

            let ext = path.extname(allFiles[i]).split(".")[1];
            // console.log(ext);

            // 1.2 - get folder name from extension

            let folderName = getFolderName(ext);
            console.log(folderName);
            
            // 1.3 - copy from source(srcPath)and paste it in destination 

            copyFiletoDestination(srcPath,fullPathofFile,folderName);   
        }
    }
}


    function getFolderName(ext){

        for(let key in types){
            // console.log(key);
            for(let i = 0 ; i < types[key].length ; i++){
                if(types[key] [i] == ext){
                    return key;
                }
            }
        }
        // return "miscellaneous"
    }

    function copyFiletoDestination(srcPath,fullPathofFile,folderName){

        //1. Folder ka path banana pdega
        let destFolderPath = path.join(srcPath,"organized_files",folderName);  
        
        //2 Check folder if it exists , if not then make a folder

        if(!fs.existsSync(destFolderPath)){
            fs.mkdirSync(destFolderPath);
        }

        //3 Copy file from src to dest
        //Return the last portion of a path
        let fileName = path.basename(fullPathofFile); // abc.zip
        let destFileName = path.join(destFolderPath,fileName);

        //                  src         dest
        // copies the content of a file -> file khudse create krega that's why we need to give complete path including file name , then ye copied content ko uss file me paste krega
        fs.copyFileSync(fullPathofFile,destFileName);
         
    }








//     // FileOrganizer\downloads
// let Path ="D:/NodeJS/FileOrganizer/downloads";
// organize(Path);




module.exports = {
    organize : organize
}