// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Ender Storage Loaded!')
//enderstorage:ender_chest
onEvent('recipes', event => {
  event.remove({output: 'enderstorage:ender_chest'})
  
event.recipes.extendedcrafting.shapedTable('enderstorage:ender_chest', [
  'cabac',
  'adfda',
  'bdedb',
  'adfda',
  'cabac'
  ],
  {
    a: 'minecraft:ender_pearl',
    b: 'minecraft:ender_eye',
    c: 'minecraft:blaze_rod',
    d: 'minecraft:obsidian',
	  e: 'minecraft:ender_chest',
    f: 'ironchest:iron_chest'
  })
})
//enderstorage:ender_tank
onEvent('recipes', event => {
  event.remove({output: 'enderstorage:ender_tank'})
  
event.recipes.extendedcrafting.shapedTable('enderstorage:ender_tank', [
  'cabac',
  'adeda',
  'bdfdb',
  'adeda',
  'cabac'
  ],
  {
    a: 'minecraft:ender_pearl',
    b: 'minecraft:ender_eye',
    c: 'minecraft:blaze_rod',
    d: 'minecraft:obsidian',
    e: 'minecraft:bucket',
  	f: 'mekanism:ultimate_fluid_tank'
  })
})