// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('Mystical Agriculture Loaded!')

onEvent('recipes', event => {  
event.shaped('4x mekanism:ingot_uranium', [
  'aaa',
  'a a',
  'aaa'
  ],
  {
    a: 'mysticalagriculture:uranium_essence',
  })
})

onEvent('recipes', event => {  
  event.shaped('2x appliedenergistics2:purified_fluix_crystal', [
    'aaa',
    'aaa',
    'aaa'
    ],
    {
      a: 'mysticalagriculture:fluix_essence',
    })
  })


onEvent('recipes', event => {  
  event.shaped('2x appliedenergistics2:purified_certus_quartz_crystal', [
    'aaa',
    'aaa',
    'aaa'
    ],
    {
      a: 'mysticalagriculture:certus_quartz_essence',
    })
  })

onEvent('recipes', event => {  
  event.shaped('2x appliedenergistics2:purified_nether_quartz_crystal', [
    'aaa',
    'aaa',
    'aaa'
    ],
    {
      a: 'mysticalagriculture:nether_quartz_essence',
    })
  })


onEvent('recipes', event => {  
  event.shaped('3x mysticalagriculture:prudentium_growth_accelerator', [
    'ada',
    'bcb',
    'aba'
    ],
    {
      a: 'mysticalagriculture:prudentium_essence',
      b: 'mysticalagriculture:inferium_growth_accelerator',
      c: 'mysticalagriculture:prudentium_gemstone',
      d: 'minecraft:bone_block'
    })
  })

onEvent('recipes', event => {  
  event.shaped('3x mysticalagriculture:tertium_growth_accelerator', [
    'ada',
    'bcb',
    'aba'
    ],
    {
      a: 'mysticalagriculture:tertium_essence',
      b: 'mysticalagriculture:prudentium_growth_accelerator',
      c: 'mysticalagriculture:tertium_gemstone',
      d: 'minecraft:bone_block'
    })
  })

onEvent('recipes', event => {  
  event.shaped('3x mysticalagriculture:imperium_growth_accelerator', [
    'ada',
    'bcb',
    'aba'
    ],
    {
      a: 'mysticalagriculture:imperium_essence',
      b: 'mysticalagriculture:tertium_growth_accelerator',
      c: 'mysticalagriculture:imperium_gemstone',
      d: 'minecraft:bone_block'
    })
  })

onEvent('recipes', event => {  
  event.shaped('3x mysticalagriculture:supremium_growth_accelerator', [
    'ada',
    'bcb',
    'aba'
    ],
    {
      a: 'mysticalagriculture:supremium_essence',
      b: 'mysticalagriculture:imperium_growth_accelerator',
      c: 'mysticalagriculture:supremium_gemstone',
      d: 'minecraft:bone_block'
    })
  })