// priority: 0

console.info('Changes Loaded!')

onEvent('item.modification', event => {
  event.modify('minecraft:ender_pearl', item => {
    item.maxStackSize = 64
    item.fireResistant = true
  })
})

onEvent('item.modification', event => {
  let tools = ['sword', 'pickaxe', 'axe', 'shovel']
  let types = ['diamond', 'golden']
  types.forEach(type => {
    tools.forEach(tool => {
      event.modify(`minecraft:${type}_${tool}`, item => item.maxDamage = 5)
    })
  })
})