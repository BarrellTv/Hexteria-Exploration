// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Extended Crafting Loaded!')
//extendedcrafting:the_ultimate_ingot
onEvent('recipes', event => {

event.recipes.extendedcrafting.shapedTable('extendedcrafting:the_ultimate_ingot', [
  'abcde',
  'fghij',
  'klmno',
  'pqrst',
  'uvwx '
  ],
  {
    a: 'minecraft:iron_ingot',
    b: 'minecraft:gold_ingot',
    c: 'minecraft:netherite_ingot',
    d: 'mysticalagriculture:inferium_ingot',
    e: 'mysticalagriculture:prudentium_ingot',
    f: 'mysticalagriculture:tertium_ingot',
    g: 'mysticalagriculture:imperium_ingot',
    h: 'mysticalagriculture:supremium_ingot',
    i: 'draconicevolution:draconium_ingot',
	j: 'draconicevolution:awakened_draconium_ingot',
	k: '#forge:ingots/uranium',
	l: 'botania:manasteel_ingot',
	m: 'botania:elementium_ingot',
	n: '#forge:ingots/copper',
	o: '#forge:ingots/nickel',
	p: '#forge:ingots/silver',
	q: '#forge:ingots/tin',
	r: '#forge:ingots/electrum',
	s: '#forge:ingots/invar',
	t: '#forge:ingots/bronze',
	u: '#forge:ingots/lead',
	v: '#forge:ingots/constantan',
	w: '#forge:ingots/signalum',
	x: '#forge:ingots/manyullyn'
  })
})
//extendedcrafting:black_iron_ingot
onEvent('recipes', event => {
	event.remove({output: 'extendedcrafting:black_iron_ingot'})

	event.shaped('extendedcrafting:black_iron_ingot', [
	  'aaa',
	  'aba',
	  'aaa'
	], {
	  a: '#forge:dusts/coal',
	  b: 'minecraft:iron_ingot'
	})
  })