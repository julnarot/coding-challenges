import { test, expect } from 'vitest';
import { isTreesSynchronized } from './day24';

test('Unit test 01', ()=> {
    const tree1 = {
        value: '🎄',
        left: { value: '⭐' },
        right: { value: '🎅' }
      }
      
      const tree2 = {
        value: '🎄',
        left: { value: '🎅' },
        right: { value: '⭐' },
      }
    expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '🎄']);
})

test('Unit test 02', () => {
  const tree1 = {
    value: '⭐️',
    left: { value: '🎅' },
    right: { value: '🎁' }
  };
  
  const tree2 = {
    value: '⭐️',
    left: { value: '🎅' },
    right: { value: '🎁' }
  };
  expect(isTreesSynchronized(tree1, tree2)).toEqual([false, '⭐️']);
});

test('Unit test 06', ()=> {
    const tree1 = {
        value: '🎄'
      }
      
      const tree2 = {
        value: '🎁'
      }
    expect(isTreesSynchronized(tree1, tree2)).toEqual([false, '🎄']);
})

test('Unit test 07', () => {
  const tree1 = {
    value: '🎄',
    left: { value: '🎅', left: { value: '🎄' }, right: { value: '⭐' } },
    right: { value: '🎁' }
  };

  const tree2 = {
    value: '🎄',
    left: { value: '🎁' },
    right: { value: '🎅', left: { value: '⭐' }, right: { value: '🎄' } }
  };

  expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '🎄']);
});


test('Unit test 08', () => {
  const tree1 = {
    value: '🎄',
    left: { value: '⭐' }
  };

  const tree2 = {
    value: '🎄',
    right: { value: '⭐' }
  };

  expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '🎄']);
});