describe('FEATURE: Have a way to count donuts', () => {
    describe ('Can add to donut count', () => {
         let underTest;

         beforeEach(() => {
             underTest = new DonutMaker();
         })
        it('should start with a click count of 0', () => {
            expect (underTest.clickCount).toBe(0);
        });

        it('Can add to a donut count', () => {
            underTest.recordClick();
            expect(underTest.clickCount).toBe(1);
        });

        it('Can retrieve 2 as a donut count if 2 clicks recorded', () => {
            underTest.recordClick();
            underTest.recordClick();
            expect(underTest.clickCount).toBe(2);
        });
    });
});

describe('Feature: Purchase Auto Clicker w/ 100 Donuts from donut count', () => {
    describe ('Can retrieve an Auto Clicker', () => {
        let underTest;

        beforeEach(() => {
            underTest = new DonutMaker();
        })
        it('Can retrieve an Auto Clicker count', () => {
            underTest.recordClick();
            expect(underTest.clickCount).toBe(1);
        });
        it('Can add to the Auto Cliker count', () => {
            underTest.recordClick();
            expect(underTest.clickCount).toBe(4);
        });
    })
});