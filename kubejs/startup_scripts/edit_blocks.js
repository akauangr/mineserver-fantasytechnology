// console.info('KubeJS >>> Modifica blocos');

// BlockEvents.modification(e => {
//     e.modify(/^dungeons:|^duneons:/, block => {

//         console.info(block.id);
//         console.info(Object.keys(block.getProperties()));
//         console.info(Object.keys(block));

//         // Blocos que contêm "brick", "tile" ou "stone" no ID
//         if (block.id.includes('brick') || block.id.includes('tile') || block.id.includes('stone')) {
//             block.tagBlock('minecraft:mineable/pickaxe'); // Tag para minerar com picareta
//         }

//         // Blocos que contêm "log", "bamboo" ou "plank" no ID
//         if (block.id.includes('log') || block.id.includes('bamboo') || block.id.includes('plank')) {
//             block.tagBlock('minecraft:mineable/axe'); // Tag para minerar com machado
//         }
//     });
// });