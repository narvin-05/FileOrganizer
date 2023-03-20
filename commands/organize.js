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
    console.log(organize_files);
    if(fs.existsSync(organize_files) == false){
        fs.mkdirSync(organize_files);
    }
    else{
        console.log("folder already exist");
    }   

    //S3. Scan the entire srcPath(downloads folder in this case) and put them in an array.

    //Reads the contents of the directory.-> basically read the names of files present in directory.
    let allFiles = fs.readdirSync(srcPath);
    console.log(allFiles);


    // S4. Will traverse the array and classify files from it's extension(.pdf , .mp3)

    for(let i = 0 ; i < allFiles.length ; i++){
        // let ext = allFiles[i].split(".")[1];
        let ext = path.extname(allFiles[i]);
        console.log(ext);
    }


}
    // FileOrganizer\downloads
let Path ="D:/NodeJS/FileOrganizer/downloads";
organize(Path);


