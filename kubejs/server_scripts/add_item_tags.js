console.info('KubeJS >>> Adiciona tags à items');

// Listen to item tag event
ServerEvents.tags('item', event => {
    // Get the #forge:cobblestone tag collection and add Diamond Ore to it
    event.add('trinkets:chest/cape', 'minecraft:elytra');
});


// Listen to block tag event
ServerEvents.tags('block', event => {

    // Adiciona a tag mineable/shovel para itens do mod 'duneons' que correspondem ao regex
    event.add('minecraft:mineable/shovel', /^(duneons:.*(dirt|sand|gravel|clay).*)$/);

    // Adiciona a tag mineable/axe para itens do mod 'duneons' que correspondem ao regex
    event.add('minecraft:mineable/axe', /^(duneons:.*(log|bamboo|plank|wood).*)$/);

    // Adiciona a tag mineable/pickaxe para itens do mod 'duneons' que correspondem ao regex
    event.add('minecraft:mineable/pickaxe', /^(duneons:.*(brick|tile|stone|rune|collon|colon|basalt).*)$/);

});