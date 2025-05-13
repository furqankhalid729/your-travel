<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TBOHotel extends Model
{
    protected $fillable = [
        'hotel_code',
        'data',
        'fetched_at',
    ];
}
