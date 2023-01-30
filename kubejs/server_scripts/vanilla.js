// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Vanilla Loaded!')
//Slabs & Stairs
onEvent('recipes', e => {
	// 2x slabs -> 1x plank through shaped crafting
	e.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:slabs' }, r => {
	  e.shaped(r.inputItems[0], ['S', 'S'], { S: Item.of(r.outputItems[0].id) })
	})
  
	// 1x stair -> 1x plank through stonecutting
	e.forEachRecipe({ type: 'minecraft:stonecutting', output: '#minecraft:stairs' }, r => {
	  e.stonecutting(r.inputItems[0], Item.of(r.outputItems[0].id))
	})
  })
//4x minecraft:crying_obsidian
  onEvent('recipes', event => {  
	event.shaped('4x minecraft:crying_obsidian', [
	  'aba',
	  'bcb',
	  'aba'
	  ],
	  {
		a: 'minecraft:ghast_tear',
		b: 'minecraft:obsidian',
		c: 'minecraft:soul_sand'
	  })
	})