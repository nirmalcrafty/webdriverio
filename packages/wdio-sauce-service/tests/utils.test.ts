import { isUnifiedPlatform } from '../src/utils'

test('isUnifiedPlatform should be false for no provided deviceName and platformName', () => {
    expect(isUnifiedPlatform({})).toEqual(false)
})

test('isUnifiedPlatform should be false for a non matching deviceName', () => {
    expect(isUnifiedPlatform({ deviceName: 'foo' })).toEqual(false)
})

test('isUnifiedPlatform should be false for a non matching W3C deviceName', () => {
    expect(isUnifiedPlatform({ 'appium:deviceName': 'foo' })).toEqual(false)
})

test('isUnifiedPlatform should be false for a non matching platformName', () => {
    expect(isUnifiedPlatform({ platformName: 'foo' })).toEqual(false)
})

test('isUnifiedPlatform should be false for an emulator test', () => {
    expect(isUnifiedPlatform({ deviceName: 'Google Pixel emulator', platformName: 'Android' })).toEqual(false)
})

test('isUnifiedPlatform should be false for an W3C emulator test', () => {
    expect(isUnifiedPlatform({ 'appium:deviceName': 'Google Pixel emulator', platformName: 'Android' })).toEqual(false)
})

test('isUnifiedPlatform should be false for a simulator test', () => {
    expect(isUnifiedPlatform({ deviceName: 'iPhone XS simulator', platformName: 'iOS' })).toEqual(false)
})

test('isUnifiedPlatform should be false for a W3C simulator test', () => {
    expect(isUnifiedPlatform({ 'appium:deviceName': 'iPhone XS simulator', platformName: 'iOS' })).toEqual(false)
})

test('isUnifiedPlatform should be true for a real device iOS test', () => {
    expect(isUnifiedPlatform({ deviceName: 'iPhone XS', platformName: 'iOS' })).toEqual(true)
})

test('isUnifiedPlatform should be true for a W3C real device iOS test', () => {
    expect(isUnifiedPlatform({ 'appium:deviceName': 'iPhone XS', platformName: 'iOS' })).toEqual(true)
})

test('isUnifiedPlatform should be true for real device Android test', () => {
    expect(isUnifiedPlatform({ deviceName: 'Google Pixel', platformName: 'Android' })).toEqual(true)
})

test('isUnifiedPlatform should be true for a W3C real device Android test', () => {
    expect(isUnifiedPlatform({ 'appium:deviceName': 'Google Pixel', platformName: 'Android' })).toEqual(true)
})
