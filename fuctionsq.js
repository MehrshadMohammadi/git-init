console.log('This run is ... ');
const fs = require('fs');






        var reads = () => {
            try {
                var converts = fs.readFileSync('database.json');
                return JSON.parse(converts);
            }catch (error) {
                return []
            }
        }
        var writes = (nodespig) => {
            fs.writeFileSync('database.json', JSON.stringify(nodespig));
        }


        var nnobj = (nodespig) => {
            console.log('+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-')
            console.log(`Title is : ${nodespig.title}`);
            console.log(`Body is : ${nodespig.body}`);
        }
debugger;

        var textrefactor = () => {
            console.log('Please Wite  = > ')
            console.log('!')
            console.log('!')
            console.log('!')
            console.log('!')
            console.log('!')

        }





var getadd = (title, body) => {
              var nodespig = reads();
              var nodesobjects = {
                  title,
                  body
              }




              var dupecated = nodespig.filter((nodesobjects) => nodesobjects.title === title);
                if (dupecated.length == 0 ){
                    nodespig.push(nodesobjects);
                    writes(nodespig);
                    return nodesobjects;
               }
            }








        var getread = (title) => {
            var allnotes = reads();
            var readfiltersq = allnotes.filter((nodesobjects) => nodesobjects.title === title);
            return readfiltersq[0];


        }


        var getremove = (title) => {
            var allnotes = reads();
            var readfiltersqa = allnotes.filter((nodesobjects) => nodesobjects.title !== title);
            writes(readfiltersqa);
            return allnotes.length != readfiltersqa.length;
        }

        var getlist= () => {
            return reads();
         }


        module.exports = {
            getadd,
            getread,
            getlist,
            textrefactor,
            getremove,
            nnobj

}