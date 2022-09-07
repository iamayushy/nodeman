import {readFile, writeFile} from 'fs/promises'

let template = await readFile(new URL('template.html', import.meta.url), 'utf-8')

const data = {
    title : 'Learn Node',
    body: 'Final HTML'
}
for(const [key, v] of Object.entries(data)){
    template = template.replace(`{${key}}`, v)

}

await writeFile(new URL('index.html', import.meta.url), template)


