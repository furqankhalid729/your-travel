<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('hotel_rooms', function (Blueprint $table) {
            $table->id();
            $table->string('duration');
            $table->string('location');
            $table->string('food');
            $table->string('tour_type');
            $table->integer('persons');
            $table->decimal('price', 10, 2);
            $table->json('tour_images'); // JSON for image data
            $table->text('summary');
            $table->json('facilities'); // JSON for facilities
            $table->json('types'); // JSON for types
            $table->json('rooms');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('hotel_rooms');
    }
};
