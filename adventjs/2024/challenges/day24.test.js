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

test('Unit test 06', ()=> {
    const tree1 = {
        value: '🎄'
      }
      
      const tree2 = {
        value: '🎁'
      }
    expect(isTreesSynchronized(tree1, tree2)).toEqual([false, '🎄']);
})