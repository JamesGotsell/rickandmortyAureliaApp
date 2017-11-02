import { Page1 } from '../../src/page1/page1'

describe('the app', () => {
    it('ricky and morty', () => {
        expect(new Page1().message).toBe('rick and morty');
    })
})