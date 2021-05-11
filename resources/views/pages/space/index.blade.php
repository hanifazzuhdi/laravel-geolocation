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
            <div class="list-group">
                @foreach ($datas as $data)
                <div class="list-group-item list-group-item-action pb-2">
                    <div class="d-flex justify-content-between">
                        <div>
                            <p>Nama Penerima : {{ $data->name_receiver }}</p>
                            <p>Alamat Lengkap : {{$data->address}}</p>
                            <a href="#">Direction</a>
                        </div>
                        <div>
                            <form action="{{ route('geolocation.destroy', ['geolocation' => $data->id]) }}"
                                method="post">
                                <a href="#" class="btn btn-info">Edit</a>
                                <button type="button" class="btn btn-outline-danger">Hapus</button>
                                @method('DELETE') @csrf
                            </form>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        <div class="card-footer">
            {{$datas->links()}}
        </div>
    </div>
</div>

@endsection
