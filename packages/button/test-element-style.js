
import {html} from '@polymer/polymer/polymer-element.js';
const styleElement = document.createElement('dom-module');
styleElement.innerHTML = 
 `<template>
 <style>
/*!
 Material Components for the Web
 Copyright (c) 2018 Google Inc.
 License: Apache-2.0
*/
@-webkit-keyframes mdc-ripple-fg-radius-in {
  from {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1); }
  to {
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }

@keyframes mdc-ripple-fg-radius-in {
  from {
    -webkit-animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1);
            transform: translate(var(--mdc-ripple-fg-translate-start, 0)) scale(1); }
  to {
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); } }

@-webkit-keyframes mdc-ripple-fg-opacity-in {
  from {
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    opacity: 0; }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0); } }

@keyframes mdc-ripple-fg-opacity-in {
  from {
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    opacity: 0; }
  to {
    opacity: var(--mdc-ripple-fg-opacity, 0); } }

@-webkit-keyframes mdc-ripple-fg-opacity-out {
  from {
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0); }
  to {
    opacity: 0; } }

@keyframes mdc-ripple-fg-opacity-out {
  from {
    -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
    opacity: var(--mdc-ripple-fg-opacity, 0); }
  to {
    opacity: 0; } }

.mdc-ripple-surface--test-edge-var-bug {
  --mdc-ripple-surface-test-edge-var: 1px solid #000;
  visibility: hidden; }
  .mdc-ripple-surface--test-edge-var-bug::before {
    border: var(--mdc-ripple-surface-test-edge-var); }

.mdc-button {
  font-family: Roboto, sans-serif;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-size: 0.875rem;
  line-height: 2.25rem;
  font-weight: 500;
  letter-spacing: 0.08929em;
  text-decoration: none;
  text-transform: uppercase;
  --mdc-ripple-fg-size: 0;
  --mdc-ripple-left: 0;
  --mdc-ripple-top: 0;
  --mdc-ripple-fg-scale: 1;
  --mdc-ripple-fg-translate-end: 0;
  --mdc-ripple-fg-translate-start: 0;
  -webkit-tap-highlight-color: transparent;
  will-change: transform, opacity;
  padding: 0 8px 0 8px;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  height: 36px;
  border: none;
  outline: none;
  /* @alternate */
  line-height: inherit;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-appearance: none;
  overflow: hidden;
  vertical-align: middle;
  border-radius: 2px; }
  .mdc-button::before, .mdc-button::after {
    position: absolute;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
    content: ""; }
  .mdc-button::before {
    transition: opacity 15ms linear;
    z-index: 1; }
  .mdc-button.mdc-ripple-upgraded::before {
    -webkit-transform: scale(var(--mdc-ripple-fg-scale, 1));
            transform: scale(var(--mdc-ripple-fg-scale, 1)); }
  .mdc-button.mdc-ripple-upgraded::after {
    top: 0;
    /* @noflip */
    left: 0;
    -webkit-transform: scale(0);
            transform: scale(0);
    -webkit-transform-origin: center center;
            transform-origin: center center; }
  .mdc-button.mdc-ripple-upgraded--unbounded::after {
    top: var(--mdc-ripple-top, 0);
    /* @noflip */
    left: var(--mdc-ripple-left, 0); }
  .mdc-button.mdc-ripple-upgraded--foreground-activation::after {
    -webkit-animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards;
            animation: 225ms mdc-ripple-fg-radius-in forwards, 75ms mdc-ripple-fg-opacity-in forwards; }
  .mdc-button.mdc-ripple-upgraded--foreground-deactivation::after {
    -webkit-animation: 150ms mdc-ripple-fg-opacity-out;
            animation: 150ms mdc-ripple-fg-opacity-out;
    -webkit-transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1));
            transform: translate(var(--mdc-ripple-fg-translate-end, 0)) scale(var(--mdc-ripple-fg-scale, 1)); }
  .mdc-button::before, .mdc-button::after {
    top: calc(50% - 100%);
    /* @noflip */
    left: calc(50% - 100%);
    width: 200%;
    height: 200%; }
  .mdc-button.mdc-ripple-upgraded::after {
    width: var(--mdc-ripple-fg-size, 100%);
    height: var(--mdc-ripple-fg-size, 100%); }
  .mdc-button::-moz-focus-inner {
    padding: 0;
    border: 0; }
  .mdc-button:active {
    outline: none; }
  .mdc-button:hover {
    cursor: pointer; }
  .mdc-button:disabled {
    background-color: transparent;
    color: rgba(0, 0, 0, 0.37);
    cursor: default;
    pointer-events: none; }
  .mdc-button:not(:disabled) {
    background-color: transparent; }
  .mdc-button:not(:disabled) {
    color: #6200ee;
    /* @alternate */
    color: var(--mdc-theme-primary, #6200ee); }
  .mdc-button::before, .mdc-button::after {
    background-color: #6200ee; }
    @supports not (-ms-ime-align: auto) {
      .mdc-button::before, .mdc-button::after {
        /* @alternate */
        background-color: var(--mdc-theme-primary, #6200ee); } }
  .mdc-button:hover::before {
    opacity: 0.04; }
  .mdc-button:not(.mdc-ripple-upgraded):focus::before, .mdc-button.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.12; }
  .mdc-button:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear; }
  .mdc-button:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.16; }
  .mdc-button.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.16; }
  .mdc-button .mdc-button__icon {
    /* @noflip */
    margin-left: 0;
    /* @noflip */
    margin-right: 8px;
    display: inline-block;
    width: 18px;
    height: 18px;
    font-size: 18px;
    vertical-align: top; }
    [dir="rtl"] .mdc-button .mdc-button__icon, .mdc-button .mdc-button__icon[dir="rtl"] {
      /* @noflip */
      margin-left: 8px;
      /* @noflip */
      margin-right: 0; }
  .mdc-button svg.mdc-button__icon {
    fill: currentColor; }

.mdc-button--raised .mdc-button__icon,
.mdc-button--unelevated .mdc-button__icon,
.mdc-button--outlined .mdc-button__icon {
  /* @noflip */
  margin-left: -4px;
  /* @noflip */
  margin-right: 8px; }
  [dir="rtl"] .mdc-button--raised .mdc-button__icon, .mdc-button--raised .mdc-button__icon[dir="rtl"], [dir="rtl"]
  .mdc-button--unelevated .mdc-button__icon,
  .mdc-button--unelevated .mdc-button__icon[dir="rtl"], [dir="rtl"]
  .mdc-button--outlined .mdc-button__icon,
  .mdc-button--outlined .mdc-button__icon[dir="rtl"] {
    /* @noflip */
    margin-left: 8px;
    /* @noflip */
    margin-right: -4px; }

.mdc-button--raised,
.mdc-button--unelevated {
  padding: 0 16px 0 16px; }
  .mdc-button--raised:disabled,
  .mdc-button--unelevated:disabled {
    background-color: rgba(0, 0, 0, 0.12);
    color: rgba(0, 0, 0, 0.37); }
  .mdc-button--raised:not(:disabled),
  .mdc-button--unelevated:not(:disabled) {
    background-color: #6200ee; }
    @supports not (-ms-ime-align: auto) {
      .mdc-button--raised:not(:disabled),
      .mdc-button--unelevated:not(:disabled) {
        /* @alternate */
        background-color: var(--mdc-theme-primary, #6200ee); } }
  .mdc-button--raised:not(:disabled),
  .mdc-button--unelevated:not(:disabled) {
    color: #fff;
    /* @alternate */
    color: var(--mdc-theme-on-primary, #fff); }
  .mdc-button--raised::before, .mdc-button--raised::after,
  .mdc-button--unelevated::before,
  .mdc-button--unelevated::after {
    background-color: #fff; }
    @supports not (-ms-ime-align: auto) {
      .mdc-button--raised::before, .mdc-button--raised::after,
      .mdc-button--unelevated::before,
      .mdc-button--unelevated::after {
        /* @alternate */
        background-color: var(--mdc-theme-on-primary, #fff); } }
  .mdc-button--raised:hover::before,
  .mdc-button--unelevated:hover::before {
    opacity: 0.08; }
  .mdc-button--raised:not(.mdc-ripple-upgraded):focus::before, .mdc-button--raised.mdc-ripple-upgraded--background-focused::before,
  .mdc-button--unelevated:not(.mdc-ripple-upgraded):focus::before,
  .mdc-button--unelevated.mdc-ripple-upgraded--background-focused::before {
    transition-duration: 75ms;
    opacity: 0.24; }
  .mdc-button--raised:not(.mdc-ripple-upgraded)::after,
  .mdc-button--unelevated:not(.mdc-ripple-upgraded)::after {
    transition: opacity 150ms linear; }
  .mdc-button--raised:not(.mdc-ripple-upgraded):active::after,
  .mdc-button--unelevated:not(.mdc-ripple-upgraded):active::after {
    transition-duration: 75ms;
    opacity: 0.32; }
  .mdc-button--raised.mdc-ripple-upgraded,
  .mdc-button--unelevated.mdc-ripple-upgraded {
    --mdc-ripple-fg-opacity: 0.32; }

.mdc-button--raised {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1); }
  .mdc-button--raised:hover, .mdc-button--raised:focus {
    box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12); }
  .mdc-button--raised:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12); }
  .mdc-button--raised:disabled {
    box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12); }

.mdc-button--outlined {
  border-style: solid;
  padding: 0 14px 0 14px;
  border-width: 2px;
  line-height: 32px; }
  .mdc-button--outlined:disabled {
    border-color: rgba(0, 0, 0, 0.37); }
  .mdc-button--outlined.mdc-button--dense {
    line-height: 27px; }
  .mdc-button--outlined:not(:disabled) {
    border-color: #6200ee;
    /* @alternate */
    border-color: var(--mdc-theme-primary, #6200ee); }

.mdc-button--dense {
  height: 32px;
  font-size: .8125rem;
  line-height: 32px; }

/*# sourceMappingURL=mdc.button.css.map*/
</style></template>`;
styleElement.register('test-component-style'); 
