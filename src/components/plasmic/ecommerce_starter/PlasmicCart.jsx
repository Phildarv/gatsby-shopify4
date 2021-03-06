// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: bL97kH9Dzecu8g2MxMGBSt
// Component: FBhprGrhReWz
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import NavBar from "../../NavBar" // plasmic-import: XWbHcDJXryxF/component
import CartItem from "../../CartItem" // plasmic-import: b4PVBEobYmxJ/component
import Button from "../../Button" // plasmic-import: EDRR_UWJpEhW/component
import Separator from "../../Separator" // plasmic-import: zJE6f4pfA7HN/component
import Footer from "../../Footer" // plasmic-import: dQk1N0a__grK/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen" // plasmic-import: wjkIUuh2R8iq/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as defaultcss from "../plasmic__default_style.module.css" // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_ecommerce_starter.module.css" // plasmic-import: bL97kH9Dzecu8g2MxMGBSt/projectcss
import * as sty from "./PlasmicCart.module.css" // plasmic-import: FBhprGrhReWz/css
import Icon31Icon from "./icons/PlasmicIcon__Icon31" // plasmic-import: 4oKNud5LGNVm/icon
import Icon32Icon from "./icons/PlasmicIcon__Icon32" // plasmic-import: 6_qpdJ0DRg_D/icon
import Icon30Icon from "./icons/PlasmicIcon__Icon30" // plasmic-import: 0qDqf4HUIUmd/icon
import Icon22Icon from "./icons/PlasmicIcon__Icon22" // plasmic-import: 7JOyoRQGqGVQ/icon
import Icon21Icon from "./icons/PlasmicIcon__Icon21" // plasmic-import: GIhjieRuC-DB/icon
import Icon20Icon from "./icons/PlasmicIcon__Icon20" // plasmic-import: eMZOJ7TiEN_c/icon
import imageJ5Glv70YUxUz from "./images/image.svg" // plasmic-import: J5glv70YUxUz/picture
import image25Stw794Y6Ukk from "./images/image2.svg" // plasmic-import: 5STW794y6ukk/picture
import image37Mco5HQbZ3TT from "./images/image3.svg" // plasmic-import: 7MCO5hQbZ3tT/picture
import image4Rt2A3Mcm0U6H from "./images/image4.svg" // plasmic-import: rt2a3MCM0U6h/picture

export const PlasmicCart__VariantProps = new Array("filled")

export const PlasmicCart__ArgProps = new Array(
  "children",
  "slot",
  "slot2",
  "slot3",
  "slot4",
  "slot5"
)

function PlasmicCart__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants(),
  })

  return (
    <React.Fragment>
      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root,
            { [sty.root__filled]: hasVariant(variants, "filled", "filled") }
          )}
        >
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar, {
              [sty.navBar__filled]: hasVariant(variants, "filled", "filled"),
            })}
            filled={
              hasVariant(variants, "filled", "filled") ? "filled" : undefined
            }
          />

          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(defaultcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"container2"}
              data-plasmic-override={overrides.container2}
              hasGap={true}
              className={classNames(defaultcss.all, sty.container2, {
                [sty.container2__filled]: hasVariant(
                  variants,
                  "filled",
                  "filled"
                ),
              })}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__lGoDm, {
                  [sty.freeBox__filled__lGoDmVchXa]: hasVariant(
                    variants,
                    "filled",
                    "filled"
                  ),
                })}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text___9OAzv,
                    {
                      [sty.text__filled___9OAzvVchXa]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      ),
                    }
                  )}
                >
                  {hasVariant(variants, "filled", "filled")
                    ? "Your bag (1)"
                    : "Looks like your bag is empty"}
                </div>

                {(hasVariant(variants, "filled", "filled") ? true : false) ? (
                  <CartItem
                    data-plasmic-name={"cartItem"}
                    data-plasmic-override={overrides.cartItem}
                    className={classNames("__wab_instance", sty.cartItem, {
                      [sty.cartItem__filled]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      ),
                    })}
                  >
                    <p.PlasmicLink
                      data-plasmic-name={"link"}
                      data-plasmic-override={overrides.link}
                      className={classNames(
                        defaultcss.a,
                        defaultcss.__wab_text,
                        sty.link
                      )}
                      component={Link}
                      platform={"gatsby"}
                    >
                      {"Eternity NITRO Men's Running Shoes"}
                    </p.PlasmicLink>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text___3SQd8
                      )}
                    >
                      {"#00000"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__toyDy
                      )}
                    >
                      {"Size: 11"}
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.text__fpbmN
                      )}
                    >
                      {"Quantity: 1"}
                    </div>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.freeBox__tyVbg)}
                    >
                      <Icon31Icon
                        className={classNames(defaultcss.all, sty.svg__xQc3B)}
                        role={"img"}
                      />

                      <Icon32Icon
                        className={classNames(defaultcss.all, sty.svg__ehgdY)}
                        role={"img"}
                      />
                    </p.Stack>
                  </CartItem>
                ) : null}

                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text__stB8,
                    {
                      [sty.text__filled__stB8VchXa]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      ),
                    }
                  )}
                >
                  {
                    "If you have an account, please sign in to see items you previously added."
                  }
                </div>

                <Button
                  colors={"black"}
                  icons={"none"}
                  rounded={"rounded"}
                  size={"large"}
                  slot={"Login"}
                />

                <Button
                  colors={"white"}
                  icons={"none"}
                  rounded={"rounded"}
                  slot={"Continue shopping"}
                />

                {(hasVariant(variants, "filled", "filled") ? false : false) ? (
                  <div
                    className={classNames(defaultcss.all, sty.freeBox__f37N, {
                      [sty.freeBox__filled__f37NVchXa]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      ),
                    })}
                  />
                ) : null}
              </p.Stack>

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__sbVwB, {
                  [sty.freeBox__filled__sbVwBVchXa]: hasVariant(
                    variants,
                    "filled",
                    "filled"
                  ),
                })}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__yBkaL, {
                    [sty.freeBox__filled__yBkaLVchXa]: hasVariant(
                      variants,
                      "filled",
                      "filled"
                    ),
                  })}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__zdc1D,
                      {
                        [sty.text__filled__zdc1DVchXa]: hasVariant(
                          variants,
                          "filled",
                          "filled"
                        ),
                      }
                    )}
                  >
                    {"Order Summary"}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__dg9M, {
                      [sty.freeBox__filled__dg9MVchXa]: hasVariant(
                        variants,
                        "filled",
                        "filled"
                      ),
                    })}
                  >
                    <div
                      className={classNames(defaultcss.all, sty.freeBox__wnKH)}
                    >
                      <div
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__uuYid,
                          {
                            [sty.freeBox__filled__uuYidVchXa]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            ),
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "Subtotal (1)"
                            : "Subtotal (0)",
                          value: args.slot5,
                          className: classNames(sty.slotTargetSlot5, {
                            [sty.slotTargetSlot5__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            ),
                          }),
                        })}
                      </div>

                      <div
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__pn0UY,
                          {
                            [sty.freeBox__filled__pn0UYVchXa]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            ),
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "$88.99"
                            : "$0.00",
                          value: args.children,
                          className: classNames(sty.slotTargetChildren, {
                            [sty.slotTargetChildren__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            ),
                          }),
                        })}
                      </div>
                    </div>

                    <div
                      className={classNames(defaultcss.all, sty.freeBox__ltRde)}
                    >
                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__eEDbj,
                            {
                              [sty.text__filled__eEDbjVchXa]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              ),
                            }
                          )}
                        >
                          {"Estimated Shipping (free over $49)"}
                        </div>
                      ) : null}

                      <div
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__ntpw9,
                          {
                            [sty.freeBox__filled__ntpw9VchXa]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            ),
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "FREE"
                            : "-",
                          value: args.slot,
                          className: classNames(sty.slotTargetSlot, {
                            [sty.slotTargetSlot__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            ),
                          }),
                        })}
                      </div>
                    </div>

                    <div
                      className={classNames(
                        defaultcss.all,
                        sty.freeBox___1Cl6Q
                      )}
                    >
                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__jZkhm,
                            {
                              [sty.text__filled__jZkhmVchXa]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              ),
                            }
                          )}
                        >
                          {"Estimated Tax"}
                        </div>
                      ) : null}

                      <div
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__f9SoG,
                          {
                            [sty.freeBox__filled__f9SoGVchXa]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            ),
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: "-",
                          value: args.slot2,
                          className: classNames(sty.slotTargetSlot2, {
                            [sty.slotTargetSlot2__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            ),
                          }),
                        })}
                      </div>
                    </div>

                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__mmK5,
                        {
                          [sty.button__filled__mmK5VchXa]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          ),
                        }
                      )}
                      icons={"none"}
                      link={"link"}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__wMKv
                          )}
                        >
                          {"Have a promo code?"}
                        </div>
                      }
                    />

                    <Separator
                      data-plasmic-name={"separator"}
                      data-plasmic-override={overrides.separator}
                      className={classNames("__wab_instance", sty.separator)}
                      dark={"dark"}
                    />

                    <div
                      className={classNames(
                        defaultcss.all,
                        sty.freeBox__ybE9O,
                        {
                          [sty.freeBox__filled__ybE9OVchXa]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          ),
                        }
                      )}
                    >
                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__krLQw,
                            {
                              [sty.text__filled__krLQwVchXa]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              ),
                            }
                          )}
                        >
                          {"Estimated Total"}
                        </div>
                      ) : null}

                      <div
                        className={classNames(
                          defaultcss.all,
                          sty.freeBox__oCsS,
                          {
                            [sty.freeBox__filled__oCsSVchXa]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            ),
                          }
                        )}
                      >
                        {p.renderPlasmicSlot({
                          defaultContents: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          )
                            ? "$88.99"
                            : "$0.00",
                          value: args.slot4,
                          className: classNames(sty.slotTargetSlot4, {
                            [sty.slotTargetSlot4__filled]: hasVariant(
                              variants,
                              "filled",
                              "filled"
                            ),
                          }),
                        })}
                      </div>
                    </div>

                    {(hasVariant(variants, "filled", "filled") ? true : false)
                      ? p.renderPlasmicSlot({
                          defaultContents: true ? (
                            <Button
                              className={classNames(
                                "__wab_instance",
                                sty.button__kHvIp
                              )}
                              colors={"blue"}
                              icons={"none"}
                              rounded={"rounded"}
                              size={"large"}
                              slot={
                                <div
                                  className={classNames(
                                    defaultcss.all,
                                    defaultcss.__wab_text,
                                    sty.text__tdldu
                                  )}
                                >
                                  {"Checkout"}
                                </div>
                              }
                            />
                          ) : null,
                          value: args.slot3,
                        })
                      : null}

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(
                        defaultcss.all,
                        sty.freeBox___8Upsj,
                        {
                          [sty.freeBox__filled___8UpsjVchXa]: hasVariant(
                            variants,
                            "filled",
                            "filled"
                          ),
                        }
                      )}
                    >
                      <Icon30Icon
                        className={classNames(defaultcss.all, sty.svg__fzRdt)}
                        role={"img"}
                      />

                      {(
                        hasVariant(variants, "filled", "filled") ? true : true
                      ) ? (
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text__u1GY,
                            {
                              [sty.text__filled__u1GYVchXa]: hasVariant(
                                variants,
                                "filled",
                                "filled"
                              ),
                            }
                          )}
                        >
                          {"Secure"}
                        </div>
                      ) : null}
                    </p.Stack>
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox___2O3ET, {
                    [sty.freeBox__filled___2O3ETVchXa]: hasVariant(
                      variants,
                      "filled",
                      "filled"
                    ),
                  })}
                >
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__ywodf)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={{
                      src: imageJ5Glv70YUxUz,
                      fullWidth: 210,
                      fullHeight: 150,
                      aspectRatio: 1.4,
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__j3Xsm)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={{
                      src: image25Stw794Y6Ukk,
                      fullWidth: 210,
                      fullHeight: 150,
                      aspectRatio: 1.4,
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__oFrzw)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={{
                      src: image37Mco5HQbZ3TT,
                      fullWidth: 210,
                      fullHeight: 150,
                      aspectRatio: 1.4,
                    }}
                  />

                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__iFNvJ)}
                    displayHeight={"auto"}
                    displayMaxHeight={"none"}
                    displayMaxWidth={"none"}
                    displayMinHeight={"0"}
                    displayMinWidth={"0"}
                    displayWidth={"auto"}
                    src={{
                      src: image4Rt2A3Mcm0U6H,
                      fullWidth: 213,
                      fullHeight: 150,
                      aspectRatio: 1.416667,
                    }}
                  />
                </p.Stack>
              </p.Stack>
            </p.Stack>

            <p.Stack
              as={"div"}
              data-plasmic-name={"container"}
              data-plasmic-override={overrides.container}
              hasGap={true}
              className={classNames(defaultcss.all, sty.container, {
                [sty.container__filled]: hasVariant(
                  variants,
                  "filled",
                  "filled"
                ),
              })}
            >
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__cufc)}
                displayHeight={"32px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={
                  "https://www.patagonia.com/on/demandware.static/-/Library-Sites-PatagoniaShared/default/dw4b201dc8/images/for-the-planet.png"
                }
              />

              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(defaultcss.all, sty.freeBox__w0OaT)}
              >
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.text___8Oi8F
                  )}
                >
                  {"1% of your purchase will go to a grassroot organization."}
                </div>

                <Button
                  className={classNames("__wab_instance", sty.button__gIeYk)}
                  icons={"none"}
                  link={"link"}
                  slot={"Learn more"}
                />
              </p.Stack>
            </p.Stack>
          </p.Stack>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
            container432={
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__iJvrZ)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__ojq4B
                    )}
                  >
                    {"Subscribe"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__dIqLb
                    )}
                  >
                    {
                      "Sign up for exclusive offers, original stories, activism, events and more."
                    }
                  </div>

                  <input
                    data-plasmic-name={"textbox"}
                    data-plasmic-override={overrides.textbox}
                    className={classNames(defaultcss.input, sty.textbox)}
                    placeholder={"Email address???"}
                    size={1}
                    type={"text"}
                    value={""}
                  />

                  <Button
                    className={classNames("__wab_instance", sty.button__ii2Q5)}
                    colors={"black"}
                    icons={"none"}
                    slot={"Sign me up"}
                  />
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__u3MUs)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text__nCafw
                    )}
                  >
                    {"Help"}
                  </div>

                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(defaultcss.all, sty.freeBox__wxHnQ)}
                  >
                    <Button slot={"Order status"}>
                      <Icon22Icon
                        className={classNames(defaultcss.all, sty.svg___3PozY)}
                        role={"img"}
                      />
                    </Button>

                    <Button
                      className={classNames("__wab_instance", sty.button__hpf)}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text___6JWkt
                          )}
                        >
                          {"Returns and exchanges"}
                        </div>
                      }
                    >
                      <Icon21Icon
                        className={classNames(defaultcss.all, sty.svg__qvgK)}
                        role={"img"}
                      />
                    </Button>

                    <Button
                      className={classNames("__wab_instance", sty.button__aDKl)}
                      slot={
                        <div
                          className={classNames(
                            defaultcss.all,
                            defaultcss.__wab_text,
                            sty.text___4ETtM
                          )}
                        >
                          {"Help center"}
                        </div>
                      }
                    >
                      <Icon20Icon
                        className={classNames(defaultcss.all, sty.svg__yk2D7)}
                        role={"img"}
                      />
                    </Button>
                  </p.Stack>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.freeBox__t6C9Z)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.text___7Lf6N
                    )}
                  >
                    {"More info"}
                  </div>

                  <div
                    className={classNames(defaultcss.all, sty.freeBox__avHkQ)}
                  >
                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.freeBox__cqdeo)}
                    >
                      <Button icons={"none"} slot={"Gift cards"} />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__hFhc5
                        )}
                        icons={"none"}
                        slot={"Find a store"}
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__wmOk0
                        )}
                        icons={"none"}
                        slot={"Careers"}
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button___83GOa
                        )}
                        icons={"none"}
                        slot={"Sitemap"}
                      />
                    </p.Stack>

                    <p.Stack
                      as={"div"}
                      hasGap={true}
                      className={classNames(defaultcss.all, sty.freeBox__oJdH)}
                    >
                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__sbhqY
                        )}
                        icons={"none"}
                        slot={"Group sales"}
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__i9CBm
                        )}
                        icons={"none"}
                        slot={"Privacy policy"}
                      />

                      <Button
                        className={classNames(
                          "__wab_instance",
                          sty.button__vd90P
                        )}
                        icons={"none"}
                        slot={"Contact us"}
                      />
                    </p.Stack>
                  </div>
                </p.Stack>
              </React.Fragment>
            }
          />
        </div>
      </div>
    </React.Fragment>
  )
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBar",
    "section",
    "container2",
    "cartItem",
    "link",
    "separator",
    "container",
    "footer",
    "textbox",
  ],

  navBar: ["navBar"],
  section: [
    "section",
    "container2",
    "cartItem",
    "link",
    "separator",
    "container",
  ],

  container2: ["container2", "cartItem", "link", "separator"],
  cartItem: ["cartItem", "link"],
  link: ["link"],
  separator: ["separator"],
  container: ["container"],
  footer: ["footer", "textbox"],
  textbox: ["textbox"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCart__ArgProps,
      internalVariantPropNames: PlasmicCart__VariantProps,
    })

    const { dataFetches } = props
    return PlasmicCart__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicCart"
  } else {
    func.displayName = `PlasmicCart.${nodeName}`
  }
  return func
}

export const PlasmicCart = Object.assign(
  // Top-level PlasmicCart renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    container2: makeNodeComponent("container2"),
    cartItem: makeNodeComponent("cartItem"),
    link: makeNodeComponent("link"),
    separator: makeNodeComponent("separator"),
    container: makeNodeComponent("container"),
    footer: makeNodeComponent("footer"),
    textbox: makeNodeComponent("textbox"),
    // Metadata about props expected for PlasmicCart
    internalVariantProps: PlasmicCart__VariantProps,
    internalArgProps: PlasmicCart__ArgProps,
  }
)

export default PlasmicCart
/* prettier-ignore-end */
