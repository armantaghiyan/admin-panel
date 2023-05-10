<template>

    <div>
        <div class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
            <data-cart type="danger" title="Session" description="Total Users">
                <div class="flex">
                    <h6>21,459</h6>
                    <span class="flex items-center text-success px-2">(29%)</span>
                </div>
            </data-cart>
            <data-cart type="info" title="Paid Users" description="Last week analytics">
                <div class="flex">
                    <h6>21,459</h6>
                    <span class="flex items-center text-success px-2">(29%)</span>
                </div>        </data-cart>
            <data-cart type="warning" title="Active Users" description="Last week analytics">
                <div class="flex">
                    <h6>21,459</h6>
                    <span class="flex items-center text-success px-2">(29%)</span>
                </div>
            </data-cart>
            <data-cart type="primary" title="Pending Users" description="Last week analytics">
                <div class="flex">
                    <h6>21,459</h6>
                    <span class="flex items-center text-success px-2">(29%)</span>
                </div>
            </data-cart>
        </div>


        <cart title="Search Filter" class="mt-6">

            <div class="px-6 pb-6">

                <div class="flex py-4">
                    <form-input type="text" label="Sample" v-model="test" class="grow px-2"/>
                    <form-input type="password" label="Sample" v-model="test2" class="grow px-2"/>
                </div>

            </div>

            <divider/>

            <br>
            <br>


            <div style="overflow-x:auto;">
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Points</th>
                        <th>Points</th>
                        <th>Points</th>
                        <th>Points</th>
                        <th>Points</th>
                        <th>Points</th>
                        <th>Points</th>
                        <th>Points</th>
                        <th>Points</th>
                        <th>Points</th>
                    </tr>
                    <tr>
                        <td>Jill</td>
                        <td>Smith</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                        <td>50</td>
                    </tr>
                    <tr>
                        <td>Eve</td>
                        <td>Jackson</td>
                        <td>94</td>
                        <td>94</td>
                        <td>94</td>
                        <td>94</td>
                        <td>94</td>
                        <td>94</td>
                        <td>94</td>
                        <td>94</td>
                        <td>94</td>
                        <td>94</td>
                    </tr>
                    <tr>
                        <td>Adam</td>
                        <td>Johnson</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                        <td>67</td>
                    </tr>
                </table>
             </div>



        </cart>



    </div>

</template>

<script>
export default {
    data() {
        return {
            test: '',
            test2: '',
        }
    },
}
</script>


<style>
table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
    border: 1px solid #ddd;
}

th, td {
    text-align: left;
    padding: 8px;
}

tr:nth-child(even){background-color: #f2f2f2}
</style>