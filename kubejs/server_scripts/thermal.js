// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Thermal Loaded!')
//Removal
onEvent('recipes', event => {
  event.remove({output: 'thermal:machine_sawmill'})
  event.remove({output: 'thermal:machine_furnace'})
  event.remove({output: 'thermal:machine_crafter'})
  event.remove({output: 'thermal:machine_bottler'})
  event.remove({output: 'thermal:machine_brewer'})
  event.remove({output: 'thermal:machine_pyrolyzer'})
  event.remove({output: 'thermal:machine_refinery'})
  event.remove({output: 'thermal:machine_chiller'})
  event.remove({output: 'thermal:machine_crucible'})
  event.remove({output: 'thermal:machine_press'})
  event.remove({output: 'thermal:machine_centrifuge'})
  event.remove({output: 'thermal:machine_insolator'})
  event.remove({output: 'thermal:machine_smelter'})
  event.remove({output: 'thermal:machine_pulverizer'})
})
//thermal:machine_sawmill
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:saw_blade"},
    {"item": "thermal:copper_gear"},
    {"item": "minecraft:oak_log"},
    {"item": "minecraft:oak_log"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "thermal:copper_gear"}, 
    {"item": "thermal:saw_blade"}
  ],
"result": {
  "item": "thermal:machine_sawmill"
  }})
})
//thermal:machine_furnace
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:copper_gear"},
    {"item": "thermal:copper_gear"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:bricks"},
    {"item": "minecraft:bricks"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:redstone_block"},
    {"item": "thermal:rf_coil"}
  ],
  "result": {
    "item": "thermal:machine_furnace"
    }})
})
//thermal:machine_crafter
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "minecraft:crafting_table"},
    {"item": "thermal:copper_gear"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:redstone"},
    {"item": "thermal:tin_ingot"},
    {"item": "thermal:tin_ingot"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "thermal:copper_gear"}
  ],
  "result": {
    "item": "thermal:machine_crafter"
    }})
})
//thermal:machine_bottler
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:copper_gear"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:bucket"},
    {"item": "minecraft:glass"},
    {"item": "minecraft:glass"},
    {"item": "thermal:copper_gear"}
  ],
  "result": {
    "item": "thermal:machine_bottler"
    }})
})
//thermal:machine_brewer
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:constantan_gear"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:brewing_stand"},
    {"item": "minecraft:glass"},
    {"item": "minecraft:glass"},
    {"item": "thermal:constantan_gear"}
  ],
  "result": {
    "item": "thermal:machine_brewer"
    }})
})
//thermal:machine_pyrolyzer
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:constantan_gear"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:blaze_rod"},
    {"item": "minecraft:nether_bricks"},
    {"item": "minecraft:nether_bricks"},
    {"item": "thermal:constantan_gear"}
  ],
  "result": {
    "item": "thermal:machine_pyrolyzer"
    }})
})
//thermal:machine_refinery
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:invar_gear"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "thermal:copper_ingot"},
    {"item": "thermal:copper_ingot"},
    {"item": "minecraft:glass"},
    {"item": "minecraft:glass"},
    {"item": "thermal:invar_gear"}
  ],
  "result": {
    "item": "thermal:machine_refinery"
    }})
})
//thermal:machine_chiller
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:invar_gear"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:packed_ice"},
    {"item": "minecraft:packed_ice"},
    {"item": "minecraft:glass"},
    {"item": "minecraft:glass"},
    {"item": "thermal:invar_gear"}
  ],
  "result": {
    "item": "thermal:machine_chiller"
    }})
})
//thermal:machine_crucible
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:invar_gear"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "thermal:obsidian_glass"},
    {"item": "thermal:obsidian_glass"},
    {"item": "minecraft:nether_bricks"},
    {"item": "minecraft:nether_bricks"},
    {"item": "thermal:invar_gear"}
  ],
  "result": {
    "item": "thermal:machine_crucible"
    }})
})
//thermal:machine_press
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:constantan_gear"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "thermal:bronze_ingot"},
    {"item": "thermal:bronze_ingot"},
    {"item": "minecraft:anvil"},
    {"item": "minecraft:anvil"},
    {"item": "thermal:constantan_gear"}
  ],
  "result": {
    "item": "thermal:machine_press"
    }})
})
//thermal:machine_centrifuge
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:constantan_gear"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:redstone"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "thermal:tin_ingot"},
    {"item": "thermal:tin_ingot"},
    {"item": "minecraft:compass"},
    {"item": "thermal:constantan_gear"}
  ],
  "result": {
    "item": "thermal:machine_centrifuge"
    }})
})
//thermal:machine_insolator
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:lumium_gear"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "mysticalagriculture:nature_essence"},
    {"item": "thermal:obsidian_glass"},
    {"item": "thermal:obsidian_glass"},
    {"item": "thermal:lumium_gear"}
  ],
  "result": {
    "item": "thermal:machine_insolator"
    }})
})
//thermal:machine_smelter
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:invar_gear"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:blast_furnace"},
    {"item": "minecraft:sand"},
    {"item": "minecraft:sand"},
    {"item": "thermal:invar_gear"}
  ],
  "result": {
    "item": "thermal:machine_smelter"
    }})
})
//thermal:machine_pulverizer
onEvent('recipes', event => {
  event.custom({ "type": "extendedcrafting:combination",
  "powerCost": 100000,
  "input": {
    "item": "thermal:machine_frame"
  },
  "ingredients": [
    {"item": "thermal:rf_coil"},
    {"item": "thermal:copper_gear"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:redstone_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:iron_block"},
    {"item": "minecraft:flint"},
    {"item": "minecraft:flint"},
    {"item": "thermal:copper_gear"}
  ],
  "result": {
    "item": "thermal:machine_pulverizer"
    }})
})