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
                name: 'Title',
                selector: row => row.Title,
                sortable: true,
            },
            {
                name: 'Description',
                selector: row => row.Description,
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
                                <table className="table table-hover">
                                    <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Job Title</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Active</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Web Programmer</td>
                                        <td><img src="https://via.placeholder.com/150"/></td>
                                        <td>info@jobs.com</td>
                                        <td><label className="badge badge-primary">Active</label></td>
                                        <td>
                                            <Link href=""><a className="btn btn-primary">Edit</a></Link>
                                            <Link href=""><a className="btn btn-danger">Delete</a></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Web Programmer</td>
                                        <td><img src="https://via.placeholder.com/150"/></td>
                                        <td>info@jobs.com</td>
                                        <td><label className="badge badge-danger">De Active</label></td>
                                        <td>
                                            <Link href=""><a className="btn btn-primary">Edit</a></Link>
                                            <Link href=""><a className="btn btn-danger">Delete</a></Link>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Web Programmer</td>
                                        <td><img src="https://via.placeholder.com/150"/></td>
                                        <td>info@jobs.com</td>
                                        <td><label className="badge badge-danger">Disabled</label></td>
                                        <td>
                                            <Link href=""><a className="btn btn-primary">Edit</a></Link>
                                            <Link href=""><a className="btn btn-danger">Delete</a></Link>
                                        </td>
                                    </tr>


                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        )

}


export async function getServerSideProps(context) {
    const res = await fetch(`http://localhost:8000/api/jobs`)
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

