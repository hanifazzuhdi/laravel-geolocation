@extends('layouts.app')

@section('content')

<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between">
                <div>
                    <a href="{{ route('geolocation.create') }}" class="btn btn-secondary">Tambah Alamat</a>
                </div>
                <div>
                    <button class="btn btn-secondary"> <i class="fa fa-list"></i> </button> |
                    <button class="btn btn-secondary"> <i class="fa fa-globe"></i> </button>
                </div>
            </div>
        </div>

        <div class="card-body">

        </div>
    </div>
</div>

@endsection
