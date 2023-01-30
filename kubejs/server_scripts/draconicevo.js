// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Draconic Evolution Loaded!')
//draconicevolution:info_tablet
onEvent('recipes', event => {
	event.remove({output: 'draconicevolution:info_tablet'})

	event.shaped('draconicevolution:info_tablet', [
	  'aaa',
	  'aba',
	  'aaa'
	], {
	  a: 'draconicevolution:draconium_dust',
	  b: 'minecraft:book'
	})
  })