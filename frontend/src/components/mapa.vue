<template>
  <div :id="target" class="mapa"></div>
</template>
<script>
export default {
  name: "mapa",
  props: {
    target: {
      default: String
    },
    tamanho: {
      default: String
    },
    altura: {
      default: String
    }
  },
  methods: {
    createMap() {
      const config = {
        target: "map",
        center: {
          coordinates: [-55.4854428, -27.6081013],
          SRID: "EPSG:4326",
        },
        SRID: "EPSG:4326",
        initialZoom: 5,
        maxZoom: 21,
        minZoom: 0,
        srs: [
          {
            name: "WGS-84 Pseudo-Mercator",
            code: "EPSG:3857",
            type: "projected",
            defs: "+proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +wktext  +no_defs",
          },
          {
            name: "SIRGAS 2000 GD",
            code: "EPSG:4326",
            type: "lat-lng",
            format: "DD",
            defs: "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs",
          },
          {
            name: "SIRGAS 2000 DMS",
            code: "EPSG:4326",
            type: "lat-lng",
            format: "DMS",
            defs: "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs",
          },
          {
            name: "SIRGAS 2000 - UTM 22S",
            code: "EPSG:31982",
            type: "projected",
            defs: "+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs",
          },
        ],
        content: [
          {
            type: "WMS",
            name: "Geo Info",
            source: "http://localhost:8080/geoserver",
            workspace: "DEV_JAZIDA",
            display: true,
            layers: [
              {
                id: 1,
                name: "Processos Ativos",
                layer: "processos_ativos_anm",
                showLegend: true,
                type: "Subcamada WMS",
                source: "",
                SRID: 3857,
                display: true,
                key: " ",
                imagery: " ",
                style: {
                  fill: {
                    color: "blue",
                  },
                  stroke: {
                    color: "#D0CBC6",
                    width: 1,
                  },
                  opacity: 0.7,
                },
                primitive: "polygon",
              },
              {
                id: 2,
                name: "Área de Servidão",
                layer: "area_servidao",
                showLegend: false,
                type: "Subcamada WMS",
                source: "",
                SRID: 3857,
                display: false,
                key: " ",
                imagery: " ",
                style: {
                  fill: {
                    color: "blue",
                  },
                  stroke: {
                    color: "#D0CBC6",
                    width: 1,
                  },
                  opacity: 0.7,
                },
                primitive: "polygon",
              },
              {
                id: 3,
                name: "Arrendamento",
                layer: "arrendamento",
                showLegend: false,
                type: "Subcamada WMS",
                source: "",
                SRID: 3857,
                display: false,
                key: " ",
                imagery: " ",
                style: {
                  fill: {
                    color: "blue",
                  },
                  stroke: {
                    color: "#D0CBC6",
                    width: 1,
                  },
                  opacity: 0.7,
                },
                primitive: "polygon",
              },
            ],
            defaultService: "wfs",
            serviceParameters: {
              tiled: true,
              srs: "EPSG:900913",
              format: "pbf",
            },
            wmsParameters: {
              ungrouped: true,
            },
            // "auth": "Basic Z2VvZmxvcmlwYTpHZW9GbG9yaXBhQDIwMjAjSVBVRg=="
          },
          {
            type: "baseLayer",
            name: "Mapas Base",
            source: "",
            workspace: "Florianopolis",
            display: true,
            layers: [
              {
                id: 21,
                name: "Bing Road",
                layer: "",
                showLegend: null,
                type: "BingMaps",
                source: "",
                SRID: 3857,
                display: null,
                key: "Aq2RAiSrI3ghwcXIenqxEZ1taldeqsZNbXMJr38peF3KfpNvr1wqhes9Uvc30mgt",
                imagery: "Road",
                style: {
                  opacity: 1,
                },
                primitive: "raster",
              },
              {
                id: 8,
                name: "Google Road",
                layer: "",
                showLegend: true,
                type: "XYZ",
                source: "http://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}",
                SRID: 4326,
                display: false,
                key: "",
                imagery: "",
                style: {
                  opacity: 1,
                },
                primitive: "raster",
              },
              {
                id: 24,
                name: "Google Satélite",
                layer: "",
                showLegend: null,
                type: "XYZ",
                source:
                  "http://mt1.google.com/vt/lyrs=s&hl=pl&&x={x}&y={y}&z={z}",
                SRID: 3857,
                display: true,
                key: "",
                imagery: "",
                style: {
                  opacity: 1,
                },
                primitive: "raster",
              },
              {
                id: 23,
                name: "Bing Satélite",
                layer: "",
                showLegend: null,
                type: "BingMaps",
                source: "",
                SRID: 3857,
                display: null,
                key: "Aq2RAiSrI3ghwcXIenqxEZ1taldeqsZNbXMJr38peF3KfpNvr1wqhes9Uvc30mgt",
                imagery: "Aerial",
                style: {
                  opacity: 1,
                },
                primitive: "raster",
              },
              {
                id: 25,
                name: "Google Híbrido",
                layer: "",
                showLegend: null,
                type: "XYZ",
                source: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}",
                SRID: 3857,
                display: false,
                key: "",
                imagery: "",
                style: {
                  opacity: 1,
                },
                primitive: "raster",
              },
              {
                id: 22,
                name: "Bing Híbrido",
                layer: "",
                showLegend: null,
                type: "BingMaps",
                source: "",
                SRID: 3857,
                display: false,
                key: "Aq2RAiSrI3ghwcXIenqxEZ1taldeqsZNbXMJr38peF3KfpNvr1wqhes9Uvc30mgt",
                imagery: "AerialWithLabels",
                style: {
                  opacity: 1,
                },
                primitive: "raster",
              },
              {
                id: 160,
                name: "Dark Matter - Carto Dark",
                layer: "",
                showLegend: null,
                type: "XYZ",
                source:
                  "https://cartodb-basemaps-b.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
                SRID: 3857,
                display: false,
                key: "",
                imagery: "",
                style: {
                  opacity: 1,
                },
                primitive: "line",
              },
              {
                id: 26,
                name: "Here maps",
                layer: "",
                showLegend: null,
                type: "XYZ",
                source:
                  "https://1.base.maps.api.here.com/maptile/2.1/maptile/newest/normal.day/{z}/{x}/{y}/256/png8?app_id=goxQkzgCIrFO1GRK6T8z&app_code=9t4JaBAAExvn0g2WhtrmiQ",
                SRID: 3857,
                display: null,
                key: "",
                imagery: "",
                style: {
                  opacity: 1,
                },
                primitive: "raster",
              },
              {
                id: 157,
                name: "OpenStreetMap",
                layer: "",
                showLegend: false,
                type: "XYZ",
                source: "http://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
                SRID: 3857,
                display: false,
                key: "",
                imagery: "",
                style: {
                  opacity: 1,
                },
                primitive: "line",
              },
              {
                id: 159,
                name: "Positron - Carto Light",
                layer: "",
                showLegend: null,
                type: "XYZ",
                source:
                  "http://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png",
                SRID: 3857,
                display: false,
                key: "",
                imagery: "",
                style: {
                  opacity: 1,
                },
                primitive: "line",
              },
            ],
            defaultService: "wfs",
            serviceParameters: {
              tiled: true,
              srs: "EPSG:900913",
              format: "pbf",
            },
            wmsParameters: {
              ungrouped: true,
            },
            auth: "Basic Z2VvZmxvcmlwYTpHZW9GbG9yaXBhQDIwMjAjSVBVRg==",
          },
        ],
        snapConfig: {
          layers: [
            {
              type: "WFS",
              name: "Service Layer",
              source: "http://localhost:8080/geoserver/wfs",
              workspace: "Jazida",
              layers: [
                {
                  internal_id: 239,
                  name: "Áreas Comuns",
                  layer: "gvw_areas_comuns",
                  showLegend: true,
                  type: "Subcamada WMS",
                  source: "",
                  SRID: 3857,
                  display: false,
                  key: " ",
                  imagery: " ",
                },
                {
                  internal_id: 241,
                  name: "Autônomas",
                  layer: "gvw_autonomas",
                  showLegend: true,
                  type: "Subcamada WMS",
                  source: "",
                  SRID: 3857,
                  display: false,
                  key: " ",
                  imagery: " ",
                },
                {
                  internal_id: 242,
                  name: "Avaliacões",
                  layer: "gvw_avaliacoes",
                  showLegend: true,
                  type: "Subcamada WMS",
                  source: "",
                  SRID: 3857,
                  display: false,
                  key: " ",
                  imagery: " ",
                },
                {
                  internal_id: 243,
                  name: "Bairros",
                  layer: "gvw_bairros",
                  showLegend: true,
                  type: "Subcamada WMS",
                  source: "",
                  SRID: 3857,
                  display: false,
                  key: " ",
                  imagery: " ",
                },
                {
                  internal_id: 244,
                  name: "Blocos",
                  layer: "gvw_blocos",
                  showLegend: true,
                  type: "Subcamada WMS",
                  source: "",
                  SRID: 3857,
                  display: false,
                  key: " ",
                  imagery: " ",
                },
                {
                  internal_id: 245,
                  name: "Condomínios",
                  layer: "gvw_condominios",
                  showLegend: true,
                  type: "Subcamada WMS",
                  source: "",
                  SRID: 3857,
                  display: false,
                  key: " ",
                  imagery: " ",
                },
                {
                  internal_id: 246,
                  name: "Distritos",
                  layer: "gvw_distritos",
                  showLegend: true,
                  type: "Subcamada WMS",
                  source: "",
                  SRID: 3857,
                  display: false,
                  key: " ",
                  imagery: " ",
                },
                {
                  internal_id: 150,
                  name: "Quadras",
                  layer: "gvw_quadras",
                  showLegend: false,
                  type: "SubCamada WFS",
                  source: "",
                  SRID: 3857,
                  display: false,
                  key: "",
                  imagery: "",
                },
                {
                  internal_id: 153,
                  name: "Setores",
                  layer: "gvw_setores",
                  showLegend: false,
                  type: "SubCamada WFS",
                  source: "",
                  SRID: 3857,
                  display: false,
                  key: "",
                  imagery: "",
                },
                {
                  internal_id: 9,
                  name: "Territoriais",
                  layer: "gvw_territoriais",
                  showLegend: false,
                  type: "SubCamada WFS",
                  source: " ",
                  SRID: 3857,
                  display: false,
                  key: "",
                  imagery: " ",
                },
                {
                  internal_id: 151,
                  name: "Trechos",
                  layer: "gvw_trechos",
                  showLegend: false,
                  type: "SubCamada WFS",
                  source: "",
                  SRID: 3857,
                  display: false,
                  key: "",
                  imagery: "",
                },
                {
                  internal_id: 255,
                  name: "Zonas",
                  layer: "gvw_zonas",
                  showLegend: true,
                  type: "Subcamada WMS",
                  source: "",
                  SRID: 3857,
                  display: true,
                  key: " ",
                  imagery: " ",
                },
              ],
              auth: "Basic Z2VvZmxvcmlwYTpHZW9GbG9yaXBhQDIwMjAjSVBVRg==",
            },
          ],
          tolerance: 10,
          units: "m",
          scale: 150,
          toVertex: true,
          toSegment: true,
        },
      };

      let map = new GeoBuilder.GeoMap("map", config);

      /** Tools sem interface gráfica **/
      map.addControl(new GeoBuilder.Draw());
      map.addControl(new GeoBuilder.GeoDesc());

      map.addControl(new GeoBuilder.SaveStatus());

      map.addControl(new GeoBuilder.MousePosition());
      map.addControl(new GeoBuilder.ScaleLine());
      map.addControl(new GeoBuilder.ScaleSelector());

      map.addControl(
        new GeoBuilder.ZoomByRect({
          position: "lb",
        })
      );
      map.addControl(
        new GeoBuilder.ZoomIn({
          position: "lb",
        })
      );
      map.addControl(
        new GeoBuilder.ZoomOut({
          position: "lb",
        })
      );
      map.addControl(
        new GeoBuilder.GoToCoordinate({
          position: "lb",
        })
      );
      map.addControl(
        new GeoBuilder.GoToHome({
          position: "lb",
        })
      );
      map.addControl(
        new GeoBuilder.Undo({
          position: "lb",
        })
      );
      map.addControl(
        new GeoBuilder.Redo({
          position: "lb",
        })
      );

      map.addControl(
        new GeoBuilder.LayerSwitcher({
          position: "rt",
        })
      );
      map.addControl(
        new GeoBuilder.PrintMap({
          position: "rt",
        })
      );

      map.addControl(
        new GeoBuilder.Transparency({
          position: "rt",
        })
      );

      let measureLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
          fill: new ol.style.Fill({
            color: "rgba(255, 0, 255, 0.2)",
          }),
          stroke: new ol.style.Stroke({
            color: "#f0f",
            width: 2,
          }),
          image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
              color: "#f0f",
            }),
          }),
        }),
      });

      measureLayer.setZIndex(999);
      map.ol.addLayer(measureLayer);

      let draftLayer = new ol.layer.Vector({
        source: new ol.source.Vector(),
        style: new ol.style.Style({
          fill: new ol.style.Fill({
            color: "rgba(255, 0, 255, 0.2)",
          }),
          stroke: new ol.style.Stroke({
            color: "#f0f",
            width: 2,
          }),
          image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
              color: "#f0f",
            }),
          }),
        }),
      });

      draftLayer.setZIndex(999);
      map.ol.addLayer(draftLayer);

      let measureSubpanel = new GeoBuilder.GeoSubPanel({
        tip: "Ferramentas de medida",
        class: "map-app-measure-line-control",
        position: "rt",
      });

      measureSubpanel.addControl(
        new GeoBuilder.SimpleMeasure({
          position: "lb",
          layer: measureLayer,
          measureType: "coordinate",
          tip: "Obter coordenadas",
          class: "map-app-measure-point",
        })
      );

      measureSubpanel.addControl(
        new GeoBuilder.SimpleMeasure({
          position: "lb",
          layer: measureLayer,
          measureType: "length",
          tip: "Medir comprimentos",
          class: "map-app-measure-line",
        })
      );

      measureSubpanel.addControl(
        new GeoBuilder.SimpleMeasure({
          position: "lb",
          layer: measureLayer,
          measureType: "area",
          tip: "Medir áreas",
          class: "map-app-measure-polygon",
        })
      );

      measureSubpanel.addControl(
        new GeoBuilder.SimpleMeasure({
          position: "lb",
          layer: measureLayer,
          measureType: "azimuth",
          tip: "Obter azimute",
          class: "map-app-measure-azimuth",
        })
      );

      measureSubpanel.addControl(
        new GeoBuilder.SimpleMeasure({
          position: "lb",
          layer: measureLayer,
          measureType: "undo",
          tip: "Desfazer última medida",
          class: "map-app-undo-control",
        })
      );

      measureSubpanel.addControl(
        new GeoBuilder.SimpleMeasure({
          position: "lb",
          layer: measureLayer,
          measureType: "clear",
          tip: "Limpar medidas",
          class: "map-app-measure-clear",
        })
      );

      map.addControl(measureSubpanel);

      let draftSubpanel = new GeoBuilder.GeoSubPanel({
        tip: "Rascunho",
        class: "map-app-draft",
        position: "rt",
      });

      draftSubpanel.addControl(
        new GeoBuilder.SimpleDraft({
          position: "rt",
          class: "map-app-draft-text",
          draftType: "text",
          layer: draftLayer,
          tip: "Inserir Texto",
        })
      );

      draftSubpanel.addControl(
        new GeoBuilder.SimpleDraft({
          position: "rt",
          class: "map-app-measure-point",
          draftType: "point",
          layer: draftLayer,
          tip: "Inserir Ponto",
        })
      );

      draftSubpanel.addControl(
        new GeoBuilder.SimpleDraft({
          position: "rt",
          class: "map-app-draft-line",
          draftType: "line",
          layer: draftLayer,
          tip: "Inserir Linha",
        })
      );

      draftSubpanel.addControl(
        new GeoBuilder.SimpleDraft({
          position: "rt",
          class: "map-app-measure-polygon",
          draftType: "polygon",
          layer: draftLayer,
          tip: "Inserir Polígono",
        })
      );

      draftSubpanel.addControl(
        new GeoBuilder.SimpleDraft({
          position: "rt",
          class: "map-app-draft-arrow",
          draftType: "arrow",
          layer: draftLayer,
          tip: "Inserir Seta",
        })
      );

      draftSubpanel.addControl(
        new GeoBuilder.SimpleDraft({
          position: "rt",
          class: "map-app-draft-image",
          draftType: "image",
          layer: draftLayer,
          tip: "Inserir Imagem",
        })
      );

      draftSubpanel.addControl(
        new GeoBuilder.SimpleDraft({
          position: "rt",
          class: "map-app-undo-control",
          draftType: "undo",
          layer: draftLayer,
          tip: "Desfazer",
        })
      );

      draftSubpanel.addControl(
        new GeoBuilder.SimpleDraft({
          position: "rt",
          class: "map-app-measure-clear",
          draftType: "clear",
          layer: draftLayer,
          tip: "Limpar todos os rascunhos",
        })
      );

      map.addControl(draftSubpanel);
    },
  },
  mounted() {
    this.createMap();
  },
};
</script>
<style>
.mapa {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;

}
</style>
  