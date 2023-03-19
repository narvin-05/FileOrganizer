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
    if(srcPath == undefined){
        //The process.cwd() method returns the current working directory of the Node.js process
        // console.log(srcPath);
        srcPath = process.cwd();
        // console.log(srcPath);
    }
    
    let organize_files = path.join(srcPath,"organized_files");
    // console.log(organize_files);
    if(!fs.existsSync(organize_files)){
        fs.mkdirSync(organize_files);
    }
    else{
        console.log("folder already exist");
    }
}


organize();


