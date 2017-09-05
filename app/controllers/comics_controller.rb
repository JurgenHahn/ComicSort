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
          @comics = Comic.search(params[:search]).arrange
      elsif params[:annual]
          @comics = Comic.where(annual: true).arrange
      else
          @comics = Comic.where(annual: false).where(volume: params["volume"]).arrange
      end

      @percentage_owned = @comics.where(owned: true).count.to_f/@comics.count.to_f*100

      # if request.xhr?
      #   @comics = Comic.where(volume: params["volume"]).arrange.limit(1)
      #   render json: @comics
      # end
    end

    def need_list
        @comics = Comic.where(owned: false).arrange
    end
    # GET /comics/1
    # GET /comics/1.json
    def show
        @stories = @comic.stories
        @previous_comic = Comic.previous_comic(@comic.volume, @comic.issue, @comic.annual)
        @next_comic = Comic.next_comic(@comic.volume, @comic.issue, @comic.annual)
        if request.xhr?
            render layout: false
        end
    end

    def new
        @comic = Comic.new
        1.times { @comic.stories.build }
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
                format.html { redirect_to comic_path(@comic), notice: 'Comic was successfully updated.' }
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
      def set_comic
          @comic = Comic.find(params[:id])
      end

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
                                        stories_attributes:[:id,
                                                            :title,
                                                            :writers,
                                                            :pencilers,
                                                            :inkers,
                                                            :colourists,
                                                            :letterers,
                                                            :editors])

        end
end
