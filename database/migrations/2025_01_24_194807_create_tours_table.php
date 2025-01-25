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
        Schema::create('tours', function (Blueprint $table) {
            $table->id();
            $table->string('duration');
            $table->string('location');
            $table->string('food');
            $table->string('tour_type');
            $table->integer('persons');
            $table->decimal('price', 10, 2);
            $table->json('tour_images');
            $table->text('summary');
            $table->json('facilities');
            $table->json('includedExcludedTypes');
            $table->text('condition');
            $table->json('tour_itinerary');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('tours');
    }
};
