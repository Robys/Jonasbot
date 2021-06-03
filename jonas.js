const puppeteer = require('puppeteer');

const EMAIL = 'jn9930410@gmail.com';
const PASSWORD = '_D5UEcNp86Ht9j!';

const TargetUser = 'Thomaz';

console.log('Bem vindo ao Jonas! um bot da pesada');

async function Jonas (){
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto('https://www.instagram.com/');
    await page.waitForTimeout(2500);

    /** LOGIN **/

    await page.click(`input[type="text"]`);
    await page.keyboard.type(EMAIL);
    await page.click(`input[type="password"]`);
    await page.keyboard.type(PASSWORD);

    await page.click(".L3NKy");

    await page.waitForNavigation();
    
    /** NAVEGATION **/
    
    await page.evaluate(() => {
        document.querySelector('.sqdOP').click()
    })
    
    await page.waitForNavigation();
    
    await page.evaluate(() => {
        document.querySelector('.bIiDR').click()
    })

    await page.click('._0ZPOP');

    await page.evaluate(()=>{
        
        let counter = 0;
        let array = document.querySelectorAll('L3NKy'); // classe do botão seguir

        array.forEach((value,index) =>{
            setTimeout(()=>{
                if(!value.classList.contains('_8A5w5')){
                    value.click();
                    counter++;
                    console.log('Jonas já seguiu' + counter + 'pessoas')
                }
                else{
                    console.log('Jonas já segue esta pessoa')
                }
            },10000)
        })
    })

    

}

Jonas();