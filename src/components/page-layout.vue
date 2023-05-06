<template>

    <div class="flex w-100 min-h-screen bg-gray">
        <aside class="w-[260px] bg-red-500">

        </aside>

        <div class="mx-content grow mx-auto px-6 py-4">

            <header>
                <cart class="px-6 h-[64px] sticky top-4 w-full"/>
            </header>


            <slot/>


        </div>


    </div>

</template>