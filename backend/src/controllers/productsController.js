const {Readable}  = require('stream')
const readline = require('readline')

module.exports = {
    async dumpProducts(req, res) {
        const {file} = req
        const {buffer} = file

        const readableFile = new Readable()
        readableFile.push(buffer)
        readableFile.push(null)

        const productsLine = readline.createInterface({
            input: readableFile
        })


        const volumesObj = []

        for await (let line of productsLine) {
            let volumeLineSplit = line.split(",")

            console.log(volumeLineSplit)
            
            if(volumeLineSplit[0] !== "Date"){
                volumesObj.push({
                    Date: volumeLineSplit[0],
                    Open: Number(volumeLineSplit[1].replace(/"/g, '')),
                    High: Number(volumeLineSplit[2].replace(/"/g, '')),
                    Low: Number(volumeLineSplit[3].replace(/"/g, '')),
                    Close: Number(volumeLineSplit[4].replace(/"/g, '')),
                    Volume: Number(volumeLineSplit[5].replace(/"/g, '')),
                })
            }
        }

        console.log(volumesObj)

        // res.json(volumesObj)
        res.send()
    }
}