class StoriesController < ApplicationController
  before_action :set_story, only: [:show, :edit, :update, :destroy]
  before_action :set_comic, only: [:new, :create, :edit, :show, :update, :index, :destroy]
  # GET /stories
  # GET /stories.json
  def index
    @stories = Story.all
  end

  # GET /stories/1
  # GET /stories/1.json
  def show
    @comic = Comic.find(params[:comic_id])
  end

  # GET /stories/new
  def new
    @story = @comic.stories.new
  end

  # GET /stories/1/edit
  def edit
  end

  # POST /stories
  # POST /stories.json
  def create
    @story = @comic.stories.new(story_params)

    respond_to do |format|
      if @story.save
        format.html { redirect_to @comic, notice: 'Story was successfully created.' }
        format.json { render :nothing => true }
      else
        format.html { render :new }
        format.json { render json: @story.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /stories/1
  # PATCH/PUT /stories/1.json
  def update
    respond_to do |format|
      if @story.update(story_params)
        format.html { redirect_to comic_story_path([@comic, @story]), notice: 'Story was successfully updated.' }
        format.json { render json: @story }
      else
        format.html { render :edit }
        format.json { render json: @story.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /stories/1
  # DELETE /stories/1.json
  def destroy
    @story.destroy
    respond_to do |format|
      format.html { redirect_to comic_path(@story.comic), notice: 'Story was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_comic
      @comic = Comic.find(params[:comic_id])
    end

    def set_story
      @story = Story.find(params[:id])
    end

    def story_params
      params.require(:story).permit(:id,
                                    :title,
                                    :writers,
                                    :pencilers,
                                    :inkers,
                                    :colourists,
                                    :letterers,
                                    :editors)
    end
end
