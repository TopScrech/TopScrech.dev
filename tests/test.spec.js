/** @type { Router } */
let router

beforeAll(async () => {
    await import('../.routify/routify-init.js')
    router = globalThis.__routify.routers[0]
    await router.ready()
    await router.activeRoute.get().rendered
})

test('can see /', async () => {
    await router.url.push('/')

    expect(document.body.innerHTML).toContain('Welcome to Your New Routify 3 Project!')
})
