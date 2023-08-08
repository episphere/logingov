console.log(`index.js loaded \n ${Date()}`);

(async function(){
    lgov = await import('./logingov.mjs')
})()