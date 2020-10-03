import { Selector } from 'testcafe';

fixture `My fixture`
    .page `https://devexpress.github.io/testcafe/example/`;

    test.skip('click populate button', async t =>{

        await t
        .setNativeDialogHandler(() => true)
        .click(Selector('#populate'))
        .expect(Selector('#developer-name').value).eql('Peter Parker')
        .takeScreenshot()
    })

    test.skip('select radio button', async t =>{
        await t 
        .setTestSpeed(0.3)
        .click(Selector('#macos'))
        .expect(Selector('#macos').checked).ok()
        .expect(Selector('#windows').checked).notOk()
        .expect(Selector('#linux').checked).notOk()
    
    })

    test.skip('Click Mutiple Checkbox', async t => {
        await t
        .setTestSpeed(0.5)
        .click(Selector('#remote-testing'))
        .expect(Selector('#remote-testing').checked).ok()
        .click(Selector('#reusing-js-code'))
        .expect(Selector('#reusing-js-code').checked).ok()
        .click(Selector('#tried-test-cafe'))
        .expect(Selector('#ried-test-cafe').checked).ok()

    })

    const slider = Selector('#ui-tried-test-cafe')
    test.skip('geser slider ' ,async t =>{
    await t 
    .setTestSpeed(0.5)
    .click(Selector('#tried-test-cafe'))
    .drag(slider, 80, 0,{offsetX:10, offsetY:10})
})



    