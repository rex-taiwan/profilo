import Head from "next/head"

const Home = () => (
  <div class="app-wrapper">
    <div class="main-content">
      <div class="main-content__header">
        <div class="header__inner">
          <a href="javascript:void(0)" class="icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </a>
          <h1>aiyou</h1>
        </div>
      </div>

      <div class="main-content__body">
        <form>
          <div class="input-field-group">
            <input type="text" class="main-search-input" placeholder="Search" />
          </div>
        </form>

        <div class="trending-list">
          <div class="flex-vert">
            <a
              href="javascript:void(0)"
              class="card card__outlined card__centered-text"
            >
              Trends
            </a>
            <a
              href="javascript:void(0)"
              class="card card__image"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)`,
              }}
            ></a>
          </div>
          <div class="big-block">
            <a
              href="javascript:void(0)"
              class="card card__white-bg card__lg-sq card__centered-text"
            >
              <div class="centered-text-content">
                <div class="emoji-lg emoji-mb20">🍳</div>
                <div class="card__text">
                  <span>10 recipes</span>
                  <br />
                  for perfect breakfasts
                </div>
              </div>
            </a>
          </div>
          <div class="flex-vert">
            <div class="flex-horz">
              <a
                href="javascript:void(0)"
                class="card card__image"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1562569633-622303bafef5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80)`,
                }}
              ></a>
              <a
                href="javascript:void(0)"
                class="card card__white-bg card__centered-text"
              >
                Cat Memes
              </a>
            </div>
            <div class="">
              <a
                href="javascript:void(0)"
                class="card card__rect card__lt-purple-bg flex-horz"
              >
                <div class="emoji-sm emoji-mr20">🔥</div>
                <div class="card__text">
                  You‘re
                  <br />
                  <span>Breathtaking</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div class="explore-section">
          <h2>Explore</h2>
          <div class="explore-section__heading">
            <div class="explore-nav">
              <a href="javascript:void(0)" class="selected">
                All
              </a>
              <a href="javascript:void(0)">Images</a>
              <a href="javascript:void(0)">Videos</a>
              <a href="javascript:void(0)">News</a>
              <a href="javascript:void(0)">Events</a>
            </div>

            <a href="javascript:void(0)" class="filter-toggle">
              <div class="filter-icon">
                <span class="circle"></span>
                <span class="line"></span>
                <span class="line"></span>
                <span class="circle"></span>
              </div>
            </a>
          </div>

          <div class="explore-section__list">
            <a href="javascript:void(0)" class="card card__white-bg card__link">
              <div
                class="avatar"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1562736171-c8150ae67a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);`,
                }}
              ></div>
              <div class="card__text">
                <span>
                  Design
                  <br />
                  Awards
                </span>
              </div>
            </a>
            <a
              href="javascript:void(0)"
              class="card card__image card__tall"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1562736171-c8150ae67a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80);`,
              }}
            >
              <div class="card__button">
                <span>Architecture</span>
              </div>
            </a>
            <a href="javascript:void(0)" class="card card__white-bg card__link">
              <div
                class="avatar"
                style={{
                  backgroundImage: `url(https://www.cordobaguitars.com/wp-content/uploads/2018/12/Untitled-1-2000x1200.jpg);`,
                }}
              ></div>
              <div class="card__text">
                <span>
                  Cordoba
                  <br />
                  Guitars
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="account-panel">
      <div class="account-panel__resizer"></div>
      <div class="account-panel__inner">
        <div class="account-panel__content">
          <div class="account-header">
            <div class="account-header__nav">
              <a href="javascript:void(0)">Profile</a>
              <a href="javascript:void(0)">Settings</a>
            </div>
            <a
              href="https://www.joshadamous.com/"
              class="user-avatar"
              style={{
                backgroundImage: `url(https://www.joshadamous.com/images/profile.jpeg);`,
              }}
              target="_blank"
            ></a>
          </div>

          <div class="account-content">
            <h2>
              Hello,{" "}
              <span>
                Josh<div class="notification-badge">42</div>
              </span>
            </h2>
            <div class="account-card-list">
              <a
                href="javascript:void(0)"
                class="card card__image card__tall"
                style={{
                  backgroundImage: `url(https://images.unsplash.com/photo-1558237316-d4762d4b8ce7?ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80)`,
                }}
              >
                <div class="card__button">
                  Get <span style={{ marginLeft: 2 }}>Glasses</span>
                </div>
              </a>
              <a
                href="javascript:void(0)"
                class="card card__off-white-bg card__lg-sq card__centered-text"
              >
                <div class="centered-text-content">
                  <div class="card__text">
                    Don‘t forget the <span>umbrella</span>
                  </div>
                  <div class="emoji-md emoji-mt20">☂️</div>
                </div>
              </a>
              <a
                href="javascript:void(0)"
                class="card card__off-white-bg card__lg-sq card__centered-text"
              >
                <div class="centered-text-content">
                  <div class="card__text">
                    Do you like <span>rainy days?</span>
                  </div>
                  <div class="emoji-sm emoji-mt40">😰 👍</div>
                </div>
              </a>
            </div>

            <div class="now-playing">
              <h3>Now Playing</h3>
              <div class="songs-list">
                <div class="card card__player card__lt-pink-bg">
                  <div
                    class="album-artwork"
                    style={{
                      backgroundImage: `url(https://images.genius.com/74622f434a6e852420ea522d6aae36f1.1000x1000x1.jpg));`,
                    }}
                  ></div>
                  <div class="song-info">
                    <div class="song-title">Going Bad (ft. Drake)</div>
                    <div class="song-artist">Meek Mill</div>
                  </div>
                  <a href="javascript:void(0)" class="control-icon">
                    <span></span>
                    <span></span>
                  </a>
                </div>
                <a
                  href="javascript:void(0)"
                  class="card card__player card__next-song"
                >
                  <div class="song-info">
                    <div class="song-title">Sicko Mode</div>
                    <div class="song-artist">Travis Scott</div>
                  </div>
                </a>
              </div>
            </div>
            <div class="account-pagination">
              <div class="pagination-list">
                <a href="javascript:void(0)" class="selected">
                  <span></span>
                </a>
                <a href="javascript:void(0)">
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default Home
