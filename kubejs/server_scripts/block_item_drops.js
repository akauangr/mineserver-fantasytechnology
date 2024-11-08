console.info('KubeJS >>> Bloqueando items defeituosos do MC Dungeons');

let blockItemDrop = [
    'duneons:vines_'
];

ItemEvents.dropped(e => {
    blockItemDrop.forEach((blocked) => {
        if (String(e.item.id).startsWith(blocked)) {
            e.itemEntity.setItem('minecraft:empty');
        }
    })
});