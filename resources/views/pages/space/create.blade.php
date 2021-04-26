@extends('layouts.app', ['title' => 'Tambah Alamat'])

@section('content')

<div class="container my-5">
    <div class="card">
        <div class="card-header">
            <div class="d-flex justify-content-between">
                <h5 class="pt-2 font-weight-bold">Tambah Alamat Penerima</h5>
                <a href="{{ route('geolocation.index') }}" class="btn btn-secondary"> <i class="fa fa-angle-left"></i>
                    Back</a>
            </div>
        </div>

        <div class="card-body">
            <form action="" method="post">
                <div class="form-group">
                    <label for="name_receiver">Nama Penerima</label>
                    <input type="text" class="form-control" name="name_receiver" id="name_receiver"
                        class="form-control @error('name_receiver') is-invalid @enderror">

                    @error('name_receiver')
                    <div class="alert alert-danger">
                        {{$message}}
                    </div>
                    @enderror
                </div>

                <div class="form-group">
                    <label for="address">Alamat Lengkap</label>
                    <textarea class="form-control @error('address') is-invalid @enderror" name="address" id="address"
                        cols="30" rows="4"></textarea>

                    @error('address')
                    <div class="alert alert-danger">
                        {{$message}}
                    </div>
                    @enderror
                </div>

                <div class="mb-5" style="height: 450px" id="mapContainer">
                    <label>Pin Alamat</label>
                </div>

                <button type="button" class="btn btn-outline-secondary">Tambah</button>
                @csrf
            </form>
        </div>
    </div>
</div>

@endsection
