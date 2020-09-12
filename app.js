console.log('Hi welcoem  !');
    const fuctionsq = require('./fuctionsq');
    const yargs = require('yargs');
    var comendshow = console.log("Comend : ",yargs.argv._[0]);


    var convertss= yargs
        .command('add','this add node + title the apps', {
            title: {
                describe: 'Add node The app',
                demand: true,
                alias: 't'
            },
            body: {
                describe: 'Add node + body The app',
                demond: true,
                alias: 'b'
            }
        })


                .command('list','this add node + title the apps',{
                    title:{
                        describe: 'list node The app',
                        demand: true ,
                        alias: 'l'
                    }
                })

                .command('remove','this add node + title the apps',{
                    title:{
                        describe: 'remove node The app',
                        demand: true ,
                        alias: 'rf'
                    }
                })
                .command('read','this add node + title the apps',{
                    title:{
                        describe: 'read node The app',
                        demand: true ,
                        alias: 'r'
                    }
                }
        )



        .help()
.argv;
var command =yargs.argv._[0]



    console.log(convertss);
        if (command === 'add'){
            var nodesobjects =  fuctionsq.getadd(convertss.title , convertss.body);
            if (nodesobjects){
                fuctionsq.textrefactor();
            }else {
                console.log('is node in not adding for duplacte title...')
            }






        }else if (command === 'read'){
            var nodesobjects = fuctionsq.getread(convertss.title);
            if (nodesobjects){
                fuctionsq.textrefactor();
                console.log(`Title is : ${nodesobjects.title}`)
                console.log(`Body is : ${nodesobjects.body}`)

            }else{
                fuctionsq.textrefactor();
                console.log('is not fund ! ! !')
            }


        }else if (command === 'remove'){
           var nodesobjects =  fuctionsq.getremove(convertss.title);
           var removeresq = nodesobjects ? 'NODE IS REMVES . . . ':'NODE IS NOUT FUNDS';
           console.log(removeresq);
        }else if (command === 'list'){

            var readlist = fuctionsq.getlist()
            console.log(`this numbers node is  : ${readlist.length}`)
            readlist.forEach(nodespig => fuctionsq.nnobj(nodespig))

        }
        else {
            console.log('error\n');
            console.log('this not found cmnd');
        }



