import {Selector} from 'testcafe'


fixture `automation dengan testcafe`
.page(`https://devexpress.github.io/testcafe/example/`)

test('click populate button', async t =>{

    await t 
   
    .setNativeDialogHandler(() => true)
    .click(Selector('#populate'))
    .expect(Selector('#developer-name').value).eql('Peter Parker')
    .takeScreenshot()
})

test('select radio button', async t =>{
    await t 
    .setTestSpeed(0.3)
    .click(Selector('#macos'))
    .expect(Selector('#macos').checked).ok()
    .expect(Selector('#windows').checked).notOk()
    .expect(Selector('#linux').checked).notOk()

})

test('Click Mutiple Checkbox', async t => {
    await t
    click(Selector('#remote-testing'))
    .expect(Selector('#remote-testing').checked).ok()
    click(Selector('#reusing-js-code'))
    .expect(Selector('#reusing-js-code').checked).ok()
    click(Selector('#tried-test-cafe'))
    .expect(Selector('#ried-test-cafe').checked).ok()

})

test ('' ,async t =>{
    
})