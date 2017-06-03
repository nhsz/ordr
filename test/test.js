import test from 'ava'
import ord from '../lib'

test('Test 1', t => {
  t.is(ord('A'), 65)
})

test('Test 2', t => {
  t.is(ord('a'), 97)
})

test('Test 3', t => {
  t.is(ord('€'), 8364)
})

test('Test 4', t => {
  t.is(ord('@'), 64)
})
