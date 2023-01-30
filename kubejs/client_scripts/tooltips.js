// priority: 0

console.info('Tooltips Loaded!')

onEvent('jei.hide.items', event => {
  event.hide('inventorypets:pet_illuminati')
  event.hide('inventorypets:pet_april_fool')
  event.hide('inventorypets:pet_christmas_tree')
  event.hide('inventorypets:pet_menorah')
  event.hide('inventorypets:pet_mishumaa_saba')
})

onEvent('item.tooltip', tooltip => {
  let list_of_items = ['diamond', 'golden']
  list_of_items.forEach(item => {
  tooltip.add(`minecraft:${item}_sword`, Text.red('Used for crafting only!'))
  tooltip.add(`minecraft:${item}_pickaxe`, Text.red('Used for crafting only!'))
  tooltip.add(`minecraft:${item}_axe`, Text.red('Used for crafting only!'))
  tooltip.add(`minecraft:${item}_shovel`, Text.red('Used for crafting only!'))
	tooltip.add(`minecraft:${item}_hoe`, Text.red('Used for crafting only!'))
  })
})

onEvent('item.tooltip', tooltip => {
  tooltip.add('projecte:tome', Text.red('Disabled!'))
  tooltip.add('projectex:knowledge_sharing_book', Text.red('Disabled!'))
  tooltip.add('projectex:final_star', Text.red('Disabled!'))
})
