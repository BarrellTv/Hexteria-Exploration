// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('ProjectE Loaded!')

onEvent('recipes', event => {
  event.remove({output: 'projecte:tome'})
  event.remove({output: 'projectex:knowledge_sharing_book'})
  event.remove({output: 'projectex:final_star'})
})



onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})
//projecte:philosophers_stone
onEvent('recipes', event => {
  event.remove({output: 'projecte:philosophers_stone'})
  
event.recipes.extendedcrafting.shapedTable('projecte:philosophers_stone', [
  'jicdhdcij',
  'kcdfbfdck',
  'cdefafedc',
  'dfflllffd',
  'hbalglabh',
  'dfflllffd',
  'cdefafedc',
  'kcdfbfdck',
  'jicdhdcij'
  ],
  {
  a: 'minecraft:dragon_egg',
  b: 'minecraft:dragon_breath',
  c: 'draconicevolution:awakened_draconium_block',
  d: 'draconicevolution:draconium_ingot',
  e: 'draconicevolution:dragon_heart',
  f: 'extendedcrafting:the_ultimate_ingot',
  g: 'extendedcrafting:ultimate_singularity',
  h: 'botania:mana_tablet',
  i: 'projecte:low_covalence_dust',
	j: 'projecte:medium_covalence_dust',
	k: 'projecte:high_covalence_dust',
	l: 'projecte:alchemical_chest'
  })
})
//projecte:repair_talisman
onEvent('recipes', event => {
  event.remove({output: 'projecte:repair_talisman'})
  
event.recipes.extendedcrafting.shapedTable('projecte:repair_talisman', [
  "ABCBA",
  "BDEDB",
  "CDFDC",
  "BDEDB",
  "ABCBA"
  ],
  {
  A: "projecte:high_covalence_dust",
  B: "projecte:low_covalence_dust",
  C: "projecte:medium_covalence_dust",
  D: "projecte:aeternalis_fuel",
  E: "minecraft:anvil",
  F: "minecraft:book",
  })
})
//projecte:low_covalence_dust
onEvent('recipes', event => {
  event.remove({output: 'projecte:low_covalence_dust'})
  
event.recipes.extendedcrafting.shapedTable('20x projecte:low_covalence_dust', [
  "ABA",
  "BAB",
  "ABA"
  ],
  {
  A: "minecraft:coal_block",
  B: "minecraft:iron_ingot"
  })
})
//projecte:medium_covalence_dust
onEvent('recipes', event => {
  event.remove({output: 'projecte:medium_covalence_dust'})
  
event.recipes.extendedcrafting.shapedTable('10x projecte:medium_covalence_dust', [
  "ABA",
  "BCB",
  "ABA"
  ],
  {
  A: "minecraft:iron_block",
  B: "projecte:low_covalence_dust",
  C: "minecraft:redstone_block"
  })
})
//projecte:high_covalence_dust
onEvent('recipes', event => {
  event.remove({output: 'projecte:high_covalence_dust'})
  
event.recipes.extendedcrafting.shapedTable('10x projecte:high_covalence_dust', [
  "ABA",
  "BCB",
  "ABA"
  ],
  {
  A: "minecraft:diamond",
  B: "projecte:medium_covalence_dust",
  C: "minecraft:diamond_block"
  })
})
//projecte:relay_mk1
onEvent('recipes', event => {
  event.remove({output: 'projecte:relay_mk1'})
  
event.recipes.extendedcrafting.shapedTable('projecte:relay_mk1', [
  'cfefc',
  'fbabf',
  'eadae',
  'fbabf',
  'cfefc'
  ],
  {
    a: 'projecte:low_covalence_dust',
    b: 'minecraft:crying_obsidian',
    c: 'botania:mana_diamond',
    d: 'botania:mana_diamond_block',
    e: 'projecte:alchemical_coal',
  	f: 'projecte:alchemical_coal_block'
  })
})
//projecte:relay_mk2
onEvent('recipes', event => {
  event.remove({output: 'projecte:relay_mk2'})
  
event.recipes.extendedcrafting.shapedTable('projecte:relay_mk2', [
  'cfefc',
  'fbabf',
  'eadae',
  'fbabf',
  'cfefc'
  ],
  {
    a: 'projecte:medium_covalence_dust',
    b: 'minecraft:crying_obsidian',
    c: 'projecte:dark_matter',
    d: 'projecte:relay_mk1',
    e: 'projecte:mobius_fuel',
  	f: 'projecte:mobius_fuel_block'
  })
})
//projecte:relay_mk3
onEvent('recipes', event => {
  event.remove({output: 'projecte:relay_mk3'})
  
event.recipes.extendedcrafting.shapedTable('projecte:relay_mk3', [
  'cfefc',
  'fgagf',
  'ebdbe',
  'fgagf',
  'cfefc'
  ],
  {
    a: 'projecte:dark_matter',
    b: 'projecte:medium_covalence_dust',
    c: 'projecte:red_matter',
    d: 'projecte:relay_mk2',
    e: 'projecte:aeternalis_fuel_block',
  	f: 'minecraft:crying_obsidian',
    g: 'projecte:high_covalence_dust'
  })
})
//projectex:basic_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:basic_relay'})
  
event.shaped('projectex:basic_relay', [
  'abc',
  'ded',
  'ddd'
  ],
  {
    a: 'projecte:low_covalence_dust',
    b: 'projecte:medium_covalence_dust',
    c: 'projecte:high_covalence_dust',
    d: 'minecraft:crying_obsidian',
    e: 'projecte:relay_mk1'
  })
})
//projectex:dark_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:dark_relay'})
  
event.shaped('projectex:dark_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projecte:dark_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:basic_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:red_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:red_relay'})
  
event.shaped('projectex:red_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projecte:red_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:dark_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:magenta_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:magenta_relay'})
  
event.shaped('projectex:magenta_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:magenta_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:red_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:pink_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:pink_relay'})
  
event.shaped('projectex:pink_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:pink_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:magenta_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:purple_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:purple_relay'})
  
event.shaped('projectex:purple_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:purple_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:pink_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:violet_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:violet_relay'})
  
event.shaped('projectex:violet_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:violet_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:purple_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:blue_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:blue_relay'})
  
event.shaped('projectex:blue_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:blue_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:violet_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:cyan_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:cyan_relay'})
  
event.shaped('projectex:cyan_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:cyan_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:blue_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:green_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:green_relay'})
  
event.shaped('projectex:green_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:green_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:cyan_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:lime_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:lime_relay'})
  
event.shaped('projectex:lime_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:lime_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:green_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:yellow_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:yellow_relay'})
  
event.shaped('projectex:yellow_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:yellow_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:lime_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:orange_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:orange_relay'})
  
event.shaped('projectex:orange_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:orange_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:yellow_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:white_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:white_relay'})
  
event.shaped('projectex:white_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:white_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:orange_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:fading_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:fading_relay'})
  
event.shaped('projectex:fading_relay', [
  'aba',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:fading_matter',
    b: 'botania:mana_diamond_block',
    c: 'projectex:white_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:final_relay
onEvent('recipes', event => {
  event.remove({output: 'projectex:final_relay'})
  
event.shaped('projectex:final_relay', [
  'bab',
  'dcd',
  'ddd'
  ],
  {
    a: 'projectex:final_star_shard',
    b: 'botania:mana_diamond_block',
    c: 'projectex:fading_relay',
    d: 'minecraft:crying_obsidian'
  })
})
//projectex:energy_link
onEvent('recipes', event => {
  event.remove({output: 'projectex:energy_link'})
  
event.recipes.extendedcrafting.shapedTable('projectex:energy_link', [
  'caeac',
  'aabaa',
  'ebdbe',
  'aabaa',
  'caeac'
  ],
  {
    a: 'projecte:low_covalence_dust',
    b: 'projecte:medium_covalence_dust',
    c: 'projecte:high_covalence_dust',
    d: 'minecraft:ender_chest',
  	e: 'projecte:red_matter'
  })
})
//projecte:collector_mk1
onEvent('recipes', event => {
  event.remove({output: 'projecte:collector_mk1'})
  
event.recipes.extendedcrafting.shapedTable('projecte:collector_mk1', [
  'ababa',
  'bfefb',
  'ccdcc',
  'bfefb',
  'ababa'
  ],
  {
    a: 'mekanism:block_refined_glowstone',
    b: 'minecraft:crying_obsidian',
    c: 'botania:manasteel_ingot',
    d: 'botania:manasteel_block',
    e: 'projecte:alchemical_coal',
  	f: 'projecte:alchemical_coal_block'
  })
})
//projecte:collector_mk2
onEvent('recipes', event => {
  event.remove({output: 'projecte:collector_mk2'})
  
event.recipes.extendedcrafting.shapedTable('projecte:collector_mk2', [
    'ababa',
    'bfefb',
    'cdgdc',
    'bfefb',
    'ababa'
    ],
    {
      a: 'mekanism:block_refined_glowstone',
      b: 'minecraft:crying_obsidian',
      c: 'projecte:low_covalence_dust',
      d: 'projecte:medium_covalence_dust',
      e: 'projecte:mobius_fuel',
      f: 'projecte:mobius_fuel_block',
      g: 'projecte:collector_mk1'
    })
  })
//projecte:collector_mk3
onEvent('recipes', event => {
  event.remove({output: 'projecte:collector_mk3'})
  
event.recipes.extendedcrafting.shapedTable('projecte:collector_mk3', [
    'ababa',
    'bedeb',
    'ccfcc',
    'bedeb',
    'ababa'
    ],
    {
      a: 'mekanism:block_refined_glowstone',
      b: 'minecraft:crying_obsidian',
      c: 'projecte:high_covalence_dust',
      d: 'projecte:aeternalis_fuel',
      e: 'projecte:aeternalis_fuel_block',
      f: 'projecte:collector_mk2'
    })
  })
//projectex:basic_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:basic_collector'})
    
event.shaped('projectex:basic_collector', [
    'abc',
    'ded',
    'ddd'
    ],
    {
      a: 'projecte:low_covalence_dust',
      b: 'projecte:medium_covalence_dust',
      c: 'projecte:high_covalence_dust',
      d: 'mekanism:block_refined_glowstone',
      e: 'projecte:collector_mk1'
    })
  })
//projectex:dark_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:dark_collector'})
    
event.shaped('projectex:dark_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projecte:dark_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:basic_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:red_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:red_collector'})
    
event.shaped('projectex:red_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projecte:red_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:dark_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:magenta_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:magenta_collector'})
    
event.shaped('projectex:magenta_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:magenta_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:red_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:pink_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:pink_collector'})
    
event.shaped('projectex:pink_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:pink_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:magenta_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:purple_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:purple_collector'})
    
event.shaped('projectex:purple_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:purple_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:pink_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:violet_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:violet_collector'})
    
event.shaped('projectex:violet_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:violet_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:purple_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:blue_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:blue_collector'})
    
event.shaped('projectex:blue_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:blue_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:violet_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:cyan_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:cyan_collector'})
    
event.shaped('projectex:cyan_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:cyan_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:blue_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:green_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:green_collector'})
    
event.shaped('projectex:green_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:green_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:cyan_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:lime_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:lime_collector'})
    
event.shaped('projectex:lime_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:lime_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:green_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:yellow_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:yellow_collector'})
    
event.shaped('projectex:yellow_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:yellow_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:lime_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:orange_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:orange_collector'})
    
event.shaped('projectex:orange_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:orange_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:yellow_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:white_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:white_collector'})
    
event.shaped('projectex:white_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:white_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:orange_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:fading_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:fading_collector'})
    
event.shaped('projectex:fading_collector', [
    'aba',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:fading_matter',
      b: 'botania:manasteel_block',
      c: 'projectex:white_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })
//projectex:final_collector
  onEvent('recipes', event => {
    event.remove({output: 'projectex:final_collector'})
    
event.shaped('projectex:final_collector', [
    'bab',
    'dcd',
    'ddd'
    ],
    {
      a: 'projectex:final_star_shard',
      b: 'botania:manasteel_block',
      c: 'projectex:fading_collector',
      d: 'mekanism:block_refined_glowstone'
    })
  })