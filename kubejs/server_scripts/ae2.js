// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('AE2 Loaded!')

onEvent('recipes', event => {
  event.remove({output: 'appliedenergistics2:energy_acceptor'})
  event.remove({output: 'appliedenergistics2:interface'})
  event.remove({output: 'appliedenergistics2:fluid_interface'})
  event.remove({output: 'appliedenergistics2:drive'})
})
//appliedenergistics2:controller
onEvent('recipes', event => {
  event.remove({output: 'appliedenergistics2:controller'})
  
event.recipes.extendedcrafting.shapedTable('appliedenergistics2:controller', [
  'ccbibcc',
  'chbgbhc',
  'bbeafbb',
  'igadagi',
  'bbfaebb',
  'chbgbhc',
  'ccbibcc'
  ],
  {
    a: 'minecraft:iron_ingot',
    b: 'minecraft:quartz',
    c: 'appliedenergistics2:smooth_sky_stone_block',
    d: 'appliedenergistics2:engineering_processor',
    e: 'appliedenergistics2:calculation_processor',
    f: 'appliedenergistics2:logic_processor',
    g: 'appliedenergistics2:charged_certus_quartz_crystal',
    h: 'appliedenergistics2:purified_certus_quartz_crystal',
    i: 'appliedenergistics2:purified_fluix_crystal'
  })
})
//appliedenergistics2:energy_acceptor
onEvent('recipes', event => {
  event.shaped('appliedenergistics2:energy_acceptor', [
    'cbc',
    'bab',
    'cbc'
  ], {
    a: 'appliedenergistics2:engineering_processor',
    b: 'appliedenergistics2:quartz_glass',
    c: 'minecraft:iron_block'
  })
})
//appliedenergistics2:interface
onEvent('recipes', event => {
  event.shaped('appliedenergistics2:interface', [
    'cbc',
    'dae',
    'cbc'
  ], {
    a: 'appliedenergistics2:calculation_processor',
    b: 'appliedenergistics2:quartz_glass',
    c: 'minecraft:iron_ingot',
    d: 'appliedenergistics2:annihilation_core',
    e: 'appliedenergistics2:formation_core'
  })
})
//appliedenergistics2:fluid_interface
onEvent('recipes', event => {
  event.shaped('appliedenergistics2:fluid_interface', [
    'cac',
    'dbe',
    'cac'
  ], {
    a: 'appliedenergistics2:calculation_processor',
    b: 'minecraft:bucket',
    c: 'minecraft:iron_ingot',
    d: 'appliedenergistics2:annihilation_core',
    e: 'appliedenergistics2:formation_core'
  })
})
//appliedenergistics2:drive
onEvent('recipes', event => {
  event.recipes.extendedcrafting.shapedTable('appliedenergistics2:drive', [
    'bcdcb',
    'cfcfc',
    'afefa',
    'cfcfc',
    'bcdcb'
  ], {
    a: 'appliedenergistics2:fluix_glass_cable',
    b: 'minecraft:iron_block',
    c: 'minecraft:iron_ingot',
    d: 'appliedenergistics2:engineering_processor',
    e: 'appliedenergistics2:calculation_processor',
	  f: 'appliedenergistics2:quartz_glass'
  })
})