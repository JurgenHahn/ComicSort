class ComicsController < ApplicationController
  before_action :set_comic, only: [:show, :edit, :update, :destroy]
  # GET /comics
  # GET /comics.json
  def index

    if request.xhr?
      respond_to do |format|
        format.json { render :nothing => true }
      end
    end

    if params[:search]
      @comics = Comic.search(params[:search]).sort_comics
    elsif params[:annual]
      @comics = Comic.all.where(annual: true)
      @percentage_owned = @comics.where(owned: true).count.to_f/@comics.count.to_f*100
    else
      @comics = Comic.where(annual: false).where(volume: params["volume"]).sort_comics
      @percentage_owned = @comics.where(owned: true).count.to_f/@comics.count.to_f*100
    end

    # if request.xhr?
    #   @comics = Comic.where(volume: params["volume"]).sort_comics.limit(1)
    #   render json: @comics
    # end

  end

  def need_list
    @comics = Comic.sort_comics.where(owned: false)
  end
  # GET /comics/1
  # GET /comics/1.json
  def show
      @stories = @comic.stories
      @previous_comic = Comic.where("(volume == :volume AND issue < :issue) OR volume < :volume", {issue: params[:issue], volume: params[:volume]}).next_in_descending_order
      @next_comic = Comic.where("(volume == :volume AND issue > :issue) OR volume > :volume", {issue: params[:issue], volume: params[:volume]}).next_in_ascending_order

    if request.xhr?
      render layout: false
    end
  end

  def new
    @comic = Comic.new
    1.times { @comic.stories.build}
  end

  def edit
  end

  # POST /comics
  # POST /comics.json
  def create
    @comic = Comic.new(comic_params)

    respond_to do |format|
      if @comic.save
        format.html { redirect_to comics_path({volume: @comic.volume}), notice: 'Comic was successfully created.' }
        format.json { render :show, status: :created, location: @comic }
      else
        format.html { render :new }
        format.json { render json: @comic.errors, status: :unprocessable_entity }
      end
    end

  end

  # PATCH/PUT /comics/1
  # PATCH/PUT /comics/1.json
  def update
    respond_to do |format|

      if @comic.update(comic_params)
        format.html { redirect_to comic_path({issue: @comic.issue,  volume: @comic.volume}), notice: 'Comic was successfully updated.' }
        format.json { render json: @comic }
      else
        format.html { render :edit }
        format.json { render json: @comic.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /comics/1
  # DELETE /comics/1.json
  def destroy
    @comic.destroy

    respond_to do |format|
      format.html { redirect_to comics_path({volume: @comic.volume, annual: @comic.annual}), notice: 'Comic was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_comic
      @comic = Comic.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def comic_params
      params.require(:comic).permit(:id,
                                    :tags,
                                    :cover_price,
                                    :volume,
                                    :issue,
                                    :price,
                                    :cover,
                                    :owned,
                                    :annual,
                                    :cover_artists,
                                    :editor_in_chief,
                                    stories_attributes: [ :id,
                                                          :title,
                                                          :writers,
                                                          :pencilers,
                                                          :inkers,
                                                          :colourists,
                                                          :letterers,
                                                          :editors])

    end
end
