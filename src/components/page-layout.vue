<template>

    <div class="w-full min-h-screen overflow-x-hidden bg-red-500">

        <div class="min-h-screen relative bg-green-500 lg:start-[260px] start-0 lg:w-content w-full duration-150">

            <div class="mx-content flex-1 mx-auto px-6 py-4">

                <header>
                    <cart class="px-6 h-[64px] sticky top-4 w-full"/>
                </header>

                <slot/>
            </div>

        </div>

    </div>


</template>