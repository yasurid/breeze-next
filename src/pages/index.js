import Head from 'next/head'
import Link from 'next/link'
import { useAuth } from '@/hooks/auth'
import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import Image from "next/image";


export default function Home() {
    const { user } = useAuth({ middleware: 'guest' })

    return (
        <>
            <Head>
                <title>Online CV</title>
            </Head>

            <header>
                <div className="collapse bg-dark" id="navbarHeader">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-md-7 py-4">
                                <h4 className="text-white">About</h4>
                                <p className="text-muted">Add some information about the album below, the author, or any
                                    other background context. Make it a few sentences long so folks can pick up some
                                    informative tidbits. Then, link them off to some social networking sites or contact
                                    information.</p>
                            </div>
                            <div className="col-sm-4 offset-md-1 py-4">
                                <h4 className="text-white">Contact</h4>
                                <ul className="list-unstyled">
                                    <li><a href="#" className="text-white">Follow on Twitter</a></li>
                                    <li><a href="#" className="text-white">Like on Facebook</a></li>
                                    <li><a href="#" className="text-white">Email me</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navbar navbar-dark bg-dark box-shadow">
                    <div className="container d-flex justify-content-between">
                        <a href="#" className="navbar-brand d-flex align-items-center">

                            <Image src='/logo.png'  width='128px' height='56px' />
                        </a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                </div>
            </header>

            <main role="main">

                <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Online CV </h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its
                            contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply
                            skip over it entirely.</p>
                        <p>
                            <Link href="/login">
                                <a className="btn btn-primary">Login</a>
                            </Link>
                            <Link href="/register">
                                <a className="btn btn-outline-primary">Register</a>
                            </Link>
                        </p>
                    </div>
                </section>

                <div className="album py-5 bg-light">
                    <div className="container">

                        <div className="row">
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="https://via.placeholder.com/250x160/120"/>
                                        <div className="card-body">
                                            <p className="card-text">Web Developer </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">

                                                    <Link href="/apply"><a className="btn btn-info">Apply</a></Link>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="https://via.placeholder.com/250x160/120"/>
                                        <div className="card-body">
                                            <p className="card-text">Web Developer </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">

                                                    <Link href="/apply"><a className="btn btn-info">Apply</a></Link>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="https://via.placeholder.com/250x160/120"/>
                                        <div className="card-body">
                                            <p className="card-text">Web Developer </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">

                                                    <Link href="/apply"><a className="btn btn-info">Apply</a></Link>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="https://via.placeholder.com/250x160/120"/>
                                        <div className="card-body">
                                            <p className="card-text">Web Developer </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">

                                                    <Link href="/apply"><a className="btn btn-info">Apply</a></Link>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="https://via.placeholder.com/250x160/120"/>
                                        <div className="card-body">
                                            <p className="card-text">Web Developer </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">

                                                    <Link href="/apply"><a className="btn btn-info">Apply</a></Link>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="https://via.placeholder.com/250x160/120"/>
                                        <div className="card-body">
                                            <p className="card-text">Web Developer </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">

                                                    <Link href="/apply"><a className="btn btn-info">Apply</a></Link>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="https://via.placeholder.com/250x160/120"/>
                                        <div className="card-body">
                                            <p className="card-text">Web Developer </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">

                                                    <Link href="/apply"><a className="btn btn-info">Apply</a></Link>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="https://via.placeholder.com/250x160/120"/>
                                        <div className="card-body">
                                            <p className="card-text">Web Developer </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">

                                                    <Link href="/apply"><a className="btn btn-info">Apply</a></Link>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card mb-4 box-shadow">
                                    <img className="card-img-top" src="https://via.placeholder.com/250x160/120"/>
                                        <div className="card-body">
                                            <p className="card-text">Web Developer </p>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div className="btn-group">

                                                    <Link href="/apply"><a className="btn btn-info">Apply</a></Link>
                                                </div>
                                                <small className="text-muted">9 mins</small>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <footer className="text-muted">
                <div className="container">
                    <p className="float-right">
                        <a href="#">Back to top</a>
                    </p>

                </div>
            </footer>

            {/*<div className='container-fluid'>
                <div className='row'>
                    <div className='col'>
                        {user ?
                            <Link href="/dashboard">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Dashboard
                                </a>
                            </Link>
                            :
                            <>
                                <Link href="/login">
                                    <a className="text-sm text-gray-700 underline">Login</a>
                                </Link>

                                <Link href="/register">
                                    <a className="ml-4 text-sm text-gray-700 underline">
                                        Register
                                    </a>
                                </Link>
                            </>
                        }
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='text-center'>Jobs</h2>
                    </div>
                    <div className='col-md-3'>
                        <img src="https://via.placeholder.com/250"/>
                        <h2>Jobs</h2>
                    </div>
                    <div className='col-md-3'>
                        <img src="https://via.placeholder.com/250"/>
                        <h2>Jobs</h2>
                    </div>
                    <div className='col-md-3'>
                        <img src="https://via.placeholder.com/250"/>
                        <h2>Jobs</h2>
                    </div><div className='col-md-3'>
                        <img src="https://via.placeholder.com/250"/>
                        <h2>Jobs</h2>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <h2 className='text-center'>Active CV</h2>
                    </div>
                    <div className='col-md-3'>
                        <img src="https://via.placeholder.com/250"/>
                        <h2>Jobs</h2>
                    </div>
                    <div className='col-md-3'>
                        <img src="https://via.placeholder.com/250"/>
                        <h2>Jobs</h2>
                    </div>
                    <div className='col-md-3'>
                        <img src="https://via.placeholder.com/250"/>
                        <h2>Jobs</h2>
                    </div><div className='col-md-3'>
                        <img src="https://via.placeholder.com/250"/>
                        <h2>Jobs</h2>
                    </div>
                </div>

            </div>*/}




        </>
    )
}
