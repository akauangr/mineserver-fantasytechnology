console.info('KubeJS >>> Adicionando receitas customizadas');

ServerEvents.recipes(event => {
  // console.info(Object.keys(event.recipes));
  // console.info(Object.keys(event.recipes.mekanismCrushing));


  let removeList = [
    'waystones:warp_stone'
  ]
  removeList.forEach(item => {
    event.remove({ output: item });
  });

  
  event.shaped(
    Item.of('waystones:warp_stone', 1), // arg 1: output
    [
      'ABA',
      '   ', // arg 2: the shape (array of strings)
      '   '
    ],
    {
      A: 'minecraft:flint',
      B: 'minecraft:ender_pearl'
    }
  )

  // event.shapeless(
  //   Item.of('betterend:ender_dust', 1), // arg 1: output
  //   [
  //     'betterend:ender_shard',
  //   ]
  // )

  // Crushing
  let crushingList = [
    // ["betterend:ender_shard", "betterend:ender_dust", 1]
  ];


  // Charging
  let chargingList = [
    ["minecraft:glass_bottle", "irons_spellbooks:lightning_bottle"],
    // ["cloudstorage:cloud", "cloudstorage:static_cloud"]
  ];


  // Alloying
  let alloyList = [
    // ["minecraft:iron_ingot", "mysticalagriculture:end_agglomeratio", "betterend:thallasium_ingot", 1],
    // ["betterend:thallasium_ingot", "betterend:ender_dust", "betterend:terminite_ingot", 1],
    // ["minecraft:netherite_ingot", "betterend:terminite_ingot", "betterend:aeternium_ingot", 1],
  ];


  crushingList.forEach(item => {
    event.custom({
      "type": "mekanism:crushing",
      "input": { "ingredient": { "item": item[0] } },
      "output": { "count": item[2], "item": item[1] }
    })

    event.custom({
      "type": "create:crushing",
      "ingredients": [
        { "item": item[0] }
      ],
      "results": [
        { "item": item[1], "count": item[2] }
      ]
    })
  })



  chargingList.forEach(item => {
    // OK
    event.custom({
      "type": "createaddition:charging",
      "input": { "item": item[0] },
      "result": { "item": item[1], "count": 1 },
      "energy": 10000 // Defina a quantidade de energia necessária
    });

    // OK
    event.custom({
      "type": "ae2:charger",
      "ingredient": { "item": item[0] },
      "result": { "item": item[1] },
      "energy": 10000
    });
  })


  alloyList.forEach(item => {
    event.custom({
      "type": "immersiveengineering:alloy",
      "input0": {
        "item": item[0]
      },
      "input1": {
        "item": item[1]
      },
      "result": {
        "base_ingredient": {
          "item": item[2]
        },
        "count": item[3]
      },
      "time": 200
    })
  });
})