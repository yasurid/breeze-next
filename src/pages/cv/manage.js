import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import AppLayout from "@/components/Layouts/AppLayout";
import DataTable from 'react-data-table-component';
import React, {Component} from "react";

let all_data = null;



export default function Manage({all_data}){


        const { user } = useAuth({ middleware: 'guest' });
        //const all = useAuth({ middleware: 'user' });
        //const users = this.props;



        const columns = [
            {
                name: 'Id',
                selector: row => row.id,
                sortable: true,
            },
            {
                name: 'Name',
                selector: row => row.name,
                sortable: true,
            },{
                name: 'Email',
                selector: row => row.email,
                sortable: true,
            }
        ];


        //const all_data = this.props;

        return (
            <AppLayout
                header={
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        Manage Users
                    </h2>
                }>

                <Head>
                    <title>Manage Users</title>
                </Head>

                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 bg-white border-b border-gray-200">

                                {<DataTable
                                columns={columns}
                                data={all_data}
                                selectableRows
                                pagination


                            />}

                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        )

}


export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:8000/api/applicant`)
    all_data = await res.json()

    if (!all_data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { all_data }, // will be passed to the page component as props
    }
}

